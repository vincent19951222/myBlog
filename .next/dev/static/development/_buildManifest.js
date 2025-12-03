self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/explore(?:/.*)?"
          }
        ],
        "source": "/explore/:nxtIid",
        "destination": "/explore/(.):nxtIid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/explore(?:/.*)?"
          }
        ],
        "source": "/explore/:nxtIid",
        "destination": "/explore/(.):nxtIid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/explore(?:/.*)?"
          }
        ],
        "source": "/explore/:nxtIid",
        "destination": "/explore/(.):nxtIid"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()