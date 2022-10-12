<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
 */
class Tab extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'url', 'project_id'];
}
