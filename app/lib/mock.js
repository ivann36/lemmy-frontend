const mockPosts = [
  {
    post: {
      id: 417787,
      name: 'werwerr',
      body: 'eeee',
      creator_id: 658960,
      community_id: 41417,
      removed: false,
      locked: false,
      published: '2024-02-23T21:49:31.971885Z',
      deleted: false,
      nsfw: false,
      ap_id: 'https://enterprise.lemmy.ml/post/417787',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658960,
      name: 'rimu2',
      banned: false,
      published: '2024-02-21T08:51:30.648143Z',
      actor_id: 'https://enterprise.lemmy.ml/u/rimu2',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41417,
      name: 'TestPleaseIgnore6',
      title: 'Bla3',
      removed: false,
      published: '2023-06-26T20:45:15.233094Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/TestPleaseIgnore6',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417787,
      comments: 0,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-02-23T21:49:31.971885Z',
      newest_comment_time: '2024-02-23T21:49:31.971885Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 0
  },
  {
    post: {
      id: 417785,
      name: 'testinsinlg',
      url: 'https://url.com/',
      body: 'testing',
      creator_id: 658962,
      community_id: 41368,
      removed: false,
      locked: false,
      published: '2024-02-23T16:11:10.476176Z',
      deleted: false,
      nsfw: false,
      embed_title: 'URL.com - MediaOptions',
      embed_description: 'URL.com is a sought-after domain that MediaOptions can help broker for you. Contact us today to get the domain name your company needs!',
      ap_id: 'https://enterprise.lemmy.ml/post/417785',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658962,
      name: 'aver',
      banned: false,
      published: '2024-02-22T12:46:32.146982Z',
      actor_id: 'https://enterprise.lemmy.ml/u/aver',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41368,
      name: 'test',
      title: 'test',
      removed: false,
      published: '2023-06-08T22:34:30.282154Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/test',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417785,
      comments: 7,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-02-23T16:11:10.476176Z',
      newest_comment_time: '2024-02-25T23:23:26.354261Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 7
  },
  {
    post: {
      id: 417784,
      name: 'testing',
      url: 'https://url.com/',
      body: 'testing',
      creator_id: 658962,
      community_id: 41368,
      removed: false,
      locked: false,
      published: '2024-02-23T14:27:43.733165Z',
      deleted: false,
      nsfw: false,
      embed_title: 'URL.com - MediaOptions',
      embed_description: 'URL.com is a sought-after domain that MediaOptions can help broker for you. Contact us today to get the domain name your company needs!',
      ap_id: 'https://enterprise.lemmy.ml/post/417784',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658962,
      name: 'aver',
      banned: false,
      published: '2024-02-22T12:46:32.146982Z',
      actor_id: 'https://enterprise.lemmy.ml/u/aver',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41368,
      name: 'test',
      title: 'test',
      removed: false,
      published: '2023-06-08T22:34:30.282154Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/test',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417784,
      comments: 0,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-02-23T14:27:43.733165Z',
      newest_comment_time: '2024-02-23T14:27:43.733165Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 0
  },
  {
    post: {
      id: 417783,
      name: 'hola',
      url: 'https://enterprise.lemmy.ml/create_post?communityId=41368',
      body: 'probando',
      creator_id: 658962,
      community_id: 41368,
      removed: false,
      locked: false,
      published: '2024-02-22T19:53:11.515690Z',
      deleted: false,
      nsfw: false,
      embed_title: '',
      ap_id: 'https://enterprise.lemmy.ml/post/417783',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658962,
      name: 'aver',
      banned: false,
      published: '2024-02-22T12:46:32.146982Z',
      actor_id: 'https://enterprise.lemmy.ml/u/aver',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41368,
      name: 'test',
      title: 'test',
      removed: false,
      published: '2023-06-08T22:34:30.282154Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/test',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417783,
      comments: 0,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-02-22T19:53:11.515690Z',
      newest_comment_time: '2024-02-22T19:53:11.515690Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 0
  },
  {
    post: {
      id: 417782,
      name: 'title2',
      body: 'jehehe',
      creator_id: 658961,
      community_id: 41376,
      removed: false,
      locked: false,
      published: '2024-02-22T01:49:01.615210Z',
      deleted: false,
      nsfw: false,
      ap_id: 'https://enterprise.lemmy.ml/post/417782',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658961,
      name: 'dzakyraf',
      banned: false,
      published: '2024-02-22T01:45:52.643402Z',
      actor_id: 'https://enterprise.lemmy.ml/u/dzakyraf',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41376,
      name: 'barnet_test',
      title: 'Barnet testing',
      description: 'A test community for the Barnet app',
      removed: false,
      published: '2023-06-16T10:27:38.954631Z',
      updated: '2023-06-16T14:47:46.186692Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/barnet_test',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417782,
      comments: 0,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-02-22T01:49:01.615210Z',
      newest_comment_time: '2024-02-22T01:49:01.615210Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 0
  },
  {
    post: {
      id: 417781,
      name: 'title',
      creator_id: 658961,
      community_id: 41376,
      removed: false,
      locked: false,
      published: '2024-02-22T01:48:34.732470Z',
      deleted: false,
      nsfw: false,
      ap_id: 'https://enterprise.lemmy.ml/post/417781',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658961,
      name: 'dzakyraf',
      banned: false,
      published: '2024-02-22T01:45:52.643402Z',
      actor_id: 'https://enterprise.lemmy.ml/u/dzakyraf',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41376,
      name: 'barnet_test',
      title: 'Barnet testing',
      description: 'A test community for the Barnet app',
      removed: false,
      published: '2023-06-16T10:27:38.954631Z',
      updated: '2023-06-16T14:47:46.186692Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/barnet_test',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417781,
      comments: 0,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-02-22T01:48:34.732470Z',
      newest_comment_time: '2024-02-22T01:48:34.732470Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 0
  },
  {
    post: {
      id: 417780,
      name: 'asdfsdfdsf',
      body: 'sfddsfdsf',
      creator_id: 658960,
      community_id: 41417,
      removed: false,
      locked: false,
      published: '2024-02-21T08:53:25.716640Z',
      deleted: false,
      nsfw: false,
      ap_id: 'https://enterprise.lemmy.ml/post/417780',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658960,
      name: 'rimu2',
      banned: false,
      published: '2024-02-21T08:51:30.648143Z',
      actor_id: 'https://enterprise.lemmy.ml/u/rimu2',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41417,
      name: 'TestPleaseIgnore6',
      title: 'Bla3',
      removed: false,
      published: '2023-06-26T20:45:15.233094Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/TestPleaseIgnore6',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417780,
      comments: 0,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-02-21T08:53:25.716640Z',
      newest_comment_time: '2024-02-21T08:53:25.716640Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 0
  },
  {
    post: {
      id: 417779,
      name: 'Test Table',
      body: 'Attempt | #1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11\n' +
        '--- | --- | --- | --- |--- |--- |--- |--- |--- |--- |--- |---\n' +
        'Seconds | 301 | 283 | 290 | 286 | 289 | 285 | 287 | 287 | 272 | 276 | 269',
      creator_id: 658956,
      community_id: 41368,
      removed: false,
      locked: false,
      published: '2024-02-10T01:51:47.725065Z',
      deleted: false,
      nsfw: false,
      ap_id: 'https://enterprise.lemmy.ml/post/417779',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658956,
      name: 'Junkasaurus',
      banned: false,
      published: '2024-02-10T01:46:11.901429Z',
      actor_id: 'https://enterprise.lemmy.ml/u/Junkasaurus',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41368,
      name: 'test',
      title: 'test',
      removed: false,
      published: '2023-06-08T22:34:30.282154Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/test',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417779,
      comments: 2,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-02-10T01:51:47.725065Z',
      newest_comment_time: '2024-02-10T18:05:20.223347Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 2
  },
  {
    post: {
      id: 417777,
      name: 'test',
      body: 'Test',
      creator_id: 658947,
      community_id: 41379,
      removed: false,
      locked: false,
      published: '2024-01-10T10:17:56.472785Z',
      deleted: false,
      nsfw: false,
      ap_id: 'https://enterprise.lemmy.ml/post/417777',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658947,
      name: 'mod1',
      banned: false,
      published: '2024-01-10T08:37:01.947814Z',
      actor_id: 'https://enterprise.lemmy.ml/u/mod1',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41379,
      name: 'test_new_comm',
      title: 'Test New Community',
      description: 'Test New Community',
      removed: false,
      published: '2023-06-20T15:58:07.499843Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/test_new_comm',
      local: true,
      icon: 'https://enterprise.lemmy.ml/pictrs/image/2153cf47-a683-461e-8841-deefeffa1b34.png',
      banner: 'https://enterprise.lemmy.ml/pictrs/image/15e54948-7c06-49de-8947-69df963fd4c6.webp',
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: false,
    creator_is_admin: false,
    counts: {
      post_id: 417777,
      comments: 0,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-01-10T10:17:56.472785Z',
      newest_comment_time: '2024-01-10T10:17:56.472785Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 0
  },
  {
    post: {
      id: 417776,
      name: 'Horse',
      url: 'https://ia600906.us.archive.org/18/items/horse_201902/6439DA40-D7BB-4FD8-8AAC-A5966B354FE3.jpeg',
      creator_id: 658945,
      community_id: 41450,
      removed: false,
      locked: false,
      published: '2024-01-08T22:28:25.918438Z',
      deleted: false,
      nsfw: false,
      thumbnail_url: 'https://enterprise.lemmy.ml/pictrs/image/3925fb6f-5568-4845-8866-7e671715f4fa.jpeg',
      ap_id: 'https://enterprise.lemmy.ml/post/417776',
      local: true,
      language_id: 0,
      featured_community: false,
      featured_local: false
    },
    creator: {
      id: 658945,
      name: 'ziggs',
      banned: false,
      published: '2024-01-08T22:14:46.560648Z',
      actor_id: 'https://enterprise.lemmy.ml/u/ziggs',
      local: true,
      deleted: false,
      bot_account: false,
      instance_id: 49
    },
    community: {
      id: 41450,
      name: 'badart',
      title: 'Bad Art',
      description: 'Art that’s bad, ugly, *un*aesthetically pleasing, poorly drawn, hard on the eyes, got an F in art.',
      removed: false,
      published: '2024-01-08T22:22:48.397218Z',
      deleted: false,
      nsfw: false,
      actor_id: 'https://enterprise.lemmy.ml/c/badart',
      local: true,
      hidden: false,
      posting_restricted_to_mods: false,
      instance_id: 49
    },
    creator_banned_from_community: false,
    creator_is_moderator: true,
    creator_is_admin: false,
    counts: {
      post_id: 417776,
      comments: 0,
      score: 1,
      upvotes: 1,
      downvotes: 0,
      published: '2024-01-08T22:28:25.918438Z',
      newest_comment_time: '2024-01-08T22:28:25.918438Z'
    },
    subscribed: 'NotSubscribed',
    saved: false,
    read: false,
    creator_blocked: false,
    unread_comments: 0
  }
]