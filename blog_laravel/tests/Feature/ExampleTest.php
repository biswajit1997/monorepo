<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_api_add_tag_Test()
    {
        
        $response = $this->postJson('/api/addtag',['tagname' => 'test1']);

        $response
            ->assertStatus(200)
            ->assertJson([
                'massege' => 'Tag added',
            ]);
    }
    public function test_api_show_tag_Test()
    {
        
        $response = $this->getJson('/api/addtag');

        $response->assertStatus(200);
            
    }
    public function test_api_delete_tag_Test()
    {
        
        $response = $this->postJson('/api/tag/delete',['id'=>'9']);

        $response
            ->assertStatus(200)
            ->assertJson([
                'massage'=>"deleted",
            ]);
           
    }
  
}
