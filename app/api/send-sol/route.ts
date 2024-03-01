import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  Connection,
  PublicKey,
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";

const SENDER_SECRET_KEY = process.env.SOLANA_SECRET_KEY
  ? new Uint8Array(process.env.SOLANA_SECRET_KEY.split(",").map(Number))
  : new Uint8Array([]);
