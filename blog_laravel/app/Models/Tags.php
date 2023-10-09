<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\Post;

class Tags extends Model
{
    protected $guarded = [ ];

    public function post(){
        return $this->hasMany(Post::class);
    }
}
