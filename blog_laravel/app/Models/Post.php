<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Tags;

class Post extends Model
{
    protected $guarded = [ ];

    public function tags(){
        
        return $this->belongsTo(Tags::class);
       
    }
}