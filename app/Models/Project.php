<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * App\Models\Project
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Tab[] $tabs
 * @property-read int|null $tabs_count
 * @method static \Illuminate\Database\Eloquent\Builder|Project newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project query()
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereUserId($value)
 * @mixin \Eloquent
 * @property-read string $favicon
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection|Media[] $media
 * @property-read int|null $media_count
 * @property-read string $embedded_code
 * @property-read string $link
 */
class Project extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['name'];

    public function tabs(): HasMany
    {
        return $this->hasMany(Tab::class);
    }

    protected $hidden = ['media'];

    protected $appends = ['favicon', 'embedded_code', 'embedded_code_minimal'];

    protected $with = ['tabs'];

    protected $withCount = ['tabs'];

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(256)
            ->height(256)
            ->keepOriginalImageFormat();
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('favicon')->singleFile();
    }

    public function getFaviconAttribute(): string
    {
        $l = $this->getMedia('favicon')->last();
        return $l
            ? $l->disk == 's3'
                ? $l->getTemporaryUrl(Carbon::now()->addDays(1))
                : $l->getFullUrl()
            : asset('favicon.ico');
    }

    public function getLinkAttribute(): string
    {
        return route('projects.show', $this->id);
    }

    public function getEmbeddedCodeAttribute(): string
    {
        return '<div style="height: 800px;
            overflow: hidden;
            box-shadow: rgb(0 0 0 / 4%) 0 1px 0, rgb(0 0 0 / 5%) 0 2px 7px, rgb(0 0 0 / 6%) 0 12px 22px;
            border-radius: 10px;">
    <iframe frameborder="0" src="' . $this->link . '" width="100%" height="800px"></iframe>
</div>';
    }
    public function getEmbeddedCodeMinimalAttribute(): string
    {
        return '<div style="height: 800px;
            overflow: hidden;
            box-shadow: rgb(0 0 0 / 4%) 0 1px 0, rgb(0 0 0 / 5%) 0 2px 7px, rgb(0 0 0 / 6%) 0 12px 22px;
            border-radius: 10px;">
    <iframe frameborder="0" src="' . $this->link . '?minimal=1" width="100%" height="800px"></iframe>
</div>';
    }

}
