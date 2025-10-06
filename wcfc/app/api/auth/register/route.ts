import { NextResponse } from "next/server"
import db from "@/lib/db"
import type { ResultSetHeader } from "mysql2/promise"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    const [existingUsers] = await db.query("SELECT id FROM users WHERE email = ?", [email])

    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    const [result] = await db.query<ResultSetHeader>("INSERT INTO users (email, password, role) VALUES (?, ?, ?)", [
      email,
      password,
      "user",
    ])

    return NextResponse.json(
      {
        user: {
          id: result.insertId,
          email,
          role: "user",
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
