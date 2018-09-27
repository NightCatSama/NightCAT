export default {
  user: `
    fragment user on User {
      account
      email
      subscribe
      avatar
      profile
      location
      github
      website
      admin
      superAdmin
    }
  `,
  tag: `
    fragment tag on Tag {
      _id
      name
      count
      article {
        _id
        title
        release
        is_draft
      }
    }
  `,
  article: `
    fragment article on Article {
      _id
      title
      content
      cover
      view
      release
      is_draft
      sort_order
      comment_count
      created_at
      author {
        account
      }
      tags {
        _id
        name
      }
    }
  `,
  comment: `
    fragment comment on Comment {
      _id
      type
      floor
      view
      created_at
      user {
        _id
        account
        avatar
      }
      reply {
        view
        created_at
        target_user {
          _id
          account
          avatar
        }
        user {
          _id
          account
          avatar
        }
      }
    }
  `,
  reply: `
    fragment reply on Reply {
      _id
      view
      created_at
      target_user {
        _id
        account
        avatar
      }
      user {
        _id
        account
        avatar
      }
    }
  `,
  link: `
    fragment link on Link {
      _id
      name
      bio
      link
      avatar
    }
  `
}
