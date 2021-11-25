import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { query as q } from 'faunadb'
import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_API_KEY,
      clientSecret: process.env.GITHUB_SECRET_API_KEY,
      scope: 'read:user'
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(email)

      try {
        await fauna.query(q.Create(q.Collection('users'), { data: { email } }))
        return true
      } catch (err) {
        console.log(err)
        return false
      }
    }
  }
})