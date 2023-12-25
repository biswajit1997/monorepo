<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class OpenAiService
{
    public static function getChatResponse($prompt)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('services.openai.api_key'),
        ])->post('https://api.openai.com/v1/engines/davinci-codex/completions', [
            'prompt' => $prompt,
            'temperature' => 0.7,
            'max_tokens' => 150,
        ]);

        return $response->json()['choices'][0]['text'] ?? 'Sorry, I could not understand that.';
    }
}
