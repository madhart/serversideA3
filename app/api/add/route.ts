import { NextRequest } from "next/server";
import { connectToDatabase } from '../db';

export async function POST(request : NextRequest) {
    const { db } = await connectToDatabase();

    const body = await request.json();

    const newCharacter = await db.collection("characters").insertOne(body);
    
    return new Response(JSON.stringify(newCharacter), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
