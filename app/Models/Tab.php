<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Spatie\Image\Exceptions\InvalidManipulation;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * App\Models\Tab
 *
 * @property int $id
 * @property int $project_id
 * @property string $title
 * @property string $url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Tab newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Tab newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Tab query()
 * @method static \Illuminate\Database\Eloquent\Builder|Tab whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tab whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tab whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tab whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tab whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tab whereUrl($value)
 * @mixin \Eloquent
 * @property-read string $screen
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection|Media[] $media
 * @property-read int|null $media_count
 * @property-read \App\Models\Project $project
 */
class Tab extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['title', 'url', 'project_id'];

    protected $hidden = ['media'];

    protected $appends = ['screen'];


    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * @throws InvalidManipulation
     */
    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(256)
            ->height(256);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('screen')->singleFile();
    }

    public function getScreenAttribute(): string
    {
        $l = $this->getMedia('screen')->last();
        return $l
            ? $l->disk == 's3'
                ? $l->getTemporaryUrl(Carbon::now()->addDays(1))
                : $l->getFullUrl()
            : '';
    }
}
