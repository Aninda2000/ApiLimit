# ApiLimit

Backend Developer project
<---------------------------  Question  ----------------------------------->
Situation:

We have our server (Server1), and for a particular endpoint say -
(https://localhost:3000/api/getData), our serverfetches data from an
external API,formats the data and gives back the response to the Client.
Problem Statement:

Unfortunately the external API only allows us to fetch 20
requests/minute, with maximum concurrency of1. If we exceed the
requests the external API willthrow errors. Now as our API can be called
by multiple clients (that can exceed 20 request/minute), we need to
make our API- getData in such a way thatit prevents any excess requests
and keeps the API running.
Task:

Make a single API- getData thattakes care ofthis problem,for external
API you can use any open API’s (We will just considerthatthe API has a
limit). You can use any external library forthe problem.

<-------------------  Technology Used  ------------------------------>
Node Js, Express Js

<-----------  API Route  ------------>
https ://localhost: 3000/api/getData => this route will give us all data which will fetch an external api. The limit of external api is 20 requests/minute. If I request more than 20 it says we exeed our limit

