import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'
import { db } from '@/firebase.config'

export default NextAuth({
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ], 
  // adapter:FirestoreAdapter(db)
  adapter: MongoDBAdapter(clientPromise)
})