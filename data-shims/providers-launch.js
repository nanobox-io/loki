export default [
  // Digital Ocean
  {
    id: 'do',
    name: "Digital Ocean",
    accounts: [
      {id: "abc"     , name: "Personal", provider_id: "do" , default_region: "sfo1"},
      {id: "xyz"     , name: "work"    , provider_id: "do" , default_region: "am3"},
    ],
    meta: {
      icon: "custom", serverNickName: "Droplet", dollarsPerMo: 5,
      specs: [
        {metric: "ram", val: "512 MB"},
        {metric: "cpu", val: "0.5 Core"},
        {metric: "disk", val: "1 GB"},
        {metric: "transfer", val: "2 TB"}
      ]
    },
    regions: [
      {name : "New York 1",    id: "nyc1"},
      {name : "New York 2",    id: "nyc2"},
      {name : "New York 3",    id: "nyc3"},
      {name : "Amsterdam 2",   id: "am2"},
      {name : "Amsterdam 3",   id: "am3"},
      {name : "San Francisco", id: "sfo1"},
      {name : "Singapore",     id: "s1"},
      {name : "London",        id: "l1"},
      {name : "Frankfurt",     id: "f1"},
      {name: "Toronto",        id: "t1"}
    ]
  },

  // Example AWS Account
  {
    id: 'aws',
    name: "AWS",
    accounts: [
      {id: "iv103n"  , name: "main"    , provider_id: "aws", default_region: "us-gov-west-1" },
    ],
    meta: {
      icon: "aws", serverNickName: "EC2 Instance", dollarsPerMo: 5,
      specs: [
        {metric: "ram", val: "512 MB"},
        {metric: "cpu", val: "0.5 Core"},
        {metric: "disk", val: "1 GB"},
        {metric: "transfer", val: "2 TB"}
      ]
    },
    regions: [
      {
        group: "US East",
        items: [
          {name: "N. Virginia", id: "us-east-1"}
        ]
      }, {
        group: "US West",
        items: [
          {name: "Oregon", id: "us-west-2"},
          {name: "N. California", id: "us-west-1"},
          {name: "AWS GovCloud", id: "us-gov-west-1"}
        ]
      }, {
        group: "EU",
        items: [
          {name: "Ireland", id: "eu-west-1"},
          {name: "Frankfurt", id: "eu-central-1"}
        ]
      }, {
        group: "Asia Pacific",
        items: [
          {name: "Singapore", id: "ap-southeast-1"},
          {name: "Tokyo", id: "ap-northeast-1"},
          {name: "Seoul", id: "ap-northeast-2"},
          {name: "Sydney", id: "ap-southeast-2"}
        ]
      }, {
        group: "South America",
        items: [
          {name: "São Paulo", id: "sa-east-1"}
        ]
      }, {
        group: "China",
        items: [
          {name: "Beijing", id: "cn-north-1"}
        ]
      }
    ]
  },

  // Google Compute
  {
    id: 'gc',
    name: "Google Compute Engine",
    accounts: [
      {id: "onf49wb" , name: "work"    , provider_id: "gc" , default_region: "us-central1-a" }
    ],
    meta: {
      icon: "google-compute", serverNickName: "VM", dollarsPerMo: 5,
      specs: [
        {metric: "ram",      val: "512 MB"},
        {metric: "cpu",      val: "0.5 Core"},
        {metric: "disk",     val: "1 GB"},
        {metric: "transfer", val: "2 TB"}
      ]
    },
    regions: [
      {
        group: "Easter United States",
        items: [
          {name: "South Carolina - B", id: "us-east1-b"},
          {name: "South Carolina - C", id: "us-east1-c"},
          {name: "South Carolina - D", id: "us-east1-d"}
        ]
      }, {
        group: "Central United States",
        items: [
          {name: "Iowa - A", id: "us-central1-a"},
          {name: "Iowa - B", id: "us-central1-b"},
          {name: "Iowa - C", id: "us-central1-c"},
          {name: "Iowa - F", id: "us-central1-f"}
        ]
      }, {
        group: "Western Europe",
        items: [
          {name: "Belgium - B", id: "europe-west1-b"},
          {name: "Belgium - C", id: "europe-west1-c"},
          {name: "Belgium - D", id: "europe-west1-d"}
        ]
      }, {
        group: "East Asia",
        items: [
          {name: "Taiwan - A", id: "asia-east1-a"},
          {name: "Taiwan - B", id: "asia-east1-b"},
          {name: "Taiwan - C", id: "asia-east1-c"}
        ]
      }
    ]
  }
];
