rs.initiate({
  _id: 'mongoreplset',
  writeConcernMajorityJournalDefault: true,
  version: 1,
  members: [
    {
      _id: 0,
      host: 'mongodb-primary:27017',
      priority: 100,
      tags: {
        "member_type": "primary"
      }
    },
    {
      _id: 1,
      host: 'mongodb-secondary-1:27017',
      priority: 10,
      tags: {
        "member_type": "secondary"
      }
    },
    {
      _id: 2,
      host: 'mongodb-secondary-2:27017',
      priority: 10,
      tags: {
        "member_type": "secondary"
      }
    },
    // {
    //   _id: 0,
    //   host: 'mongodb-primary:27017',
    //   priority: 0,
    //   arbiterOnly: true
    // }
  ],
  settings: {
    // 疎通のタイムアウト: 10 秒
    electionTimeoutMillis: 10000
  }
})
rs.secondaryOk()
