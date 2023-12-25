<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ChatControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testChatEndpoint()
    {
        $response = $this->postJson('/api/chat', ['message' => 'Hello, ChatGPT!']);

        $response->assertStatus(200)
                 ->assertJsonStructure(['message']);
    }
}
