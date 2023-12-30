<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function chat(Request $request)
{
    try {
        // $response = Http::withHeaders([
        //     'Content-Type' => 'application/json',
        //     'Authorization' => 'Bearer ' . config('services.openai.api_key'),
        // ])->post('https://api.openai.com/v1/chat/completions', [
        //     'model' => 'gpt-3.5-turbo',
        //     'messages' =>[
        //         'role' => 'user',
        //         'content' => $request->input('message')
        //     ],
        //     'temperature' => 0.5,
        //     'max_tokens' => 200,
        //     'top_p' => 1.0,
        //     'frequency_penalty' => 0.52,
        //     'presence_penalty' => 0.5,
        //     'stop' => ["11."],
        // ]);


        $openaiApiKey = config('services.openai.api_key');

        $response = Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $openaiApiKey,
            ])
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => 'gpt-3.5-turbo',
                'messages' => [
                    [
                        'role' => 'system',
                        'content' => $request->input('message'),
                    ]
                    // [
                    //     'role' => 'user',
                    //     'content' => 'Hello!',
                    // ],
                ],
            ]);

        
    
        $choices = $response->json();


        $chatResponse = count($choices) > 0 ? $choices['choices'][0] : 'Sorry, I could not understand that.';
    
        return response()->json(['message' => $chatResponse['message']['content']]);
    } catch (\Exception $e) {
        // Handle API request errors
        return response()->json(['error' => $e->getMessage()], 500);
    }
    
}
}
