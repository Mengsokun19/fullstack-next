export const getUserQuery = `
  query GetUser($email: String!) {
    user({by: {email: $email}) {
      id
      email
      name
      avatarUrl
      description
      githubUrl
      linkedInUrl
    }
  }
`

export const createUserMutation = `
  mutation CreateUser($input: UserCreatInput!) {
    userCreate(input: $input) {
      user {
        id
        email
        name
        avatarUrl
        description
        githubUrl
        linkedInUrl
      }
    }
  }
`
