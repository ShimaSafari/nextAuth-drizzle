import { db } from '@/db'
import { users as usersTable } from '@/db/schema/users'

export default async function Test() {
  const users = await db.select().from(usersTable)

  console.log(users)

  return(
    <>check terminal</>
  )
}
