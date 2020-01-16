Available for download. Simple controller
<img src="images/1.png">
<img src="images/2.png">
<img src="images/3.png">

{
  "private": true,
  "workspaces": {
    "packages": [
      "packages/*"
    ],
    "nohoist": [
      "**/jest",
      "expo",
      "expo/**"
    ]
  }
}


  "nohoist": [
    "**/jest",
    "expo",
    "expo/**",
    "apollo-boost",
    "apollo-boost/**",
    "react-apollo-hooks",
    "react-apollo-hooks/**"
  ],