var http=require("http");//creiamo una comunicazione con il protocollo http//per specificare il modulo
http.createServer(onRequest).listen(8080);  //crea il server grazie al modulo e ci associamo una callback //.listen(8080) imposta la porta di ascolto
console.log("Server is up and running");//callback
//--------------------------------------------
function onRequest(request,reponse){//capisco che è stata fatta la richiesta
    console.log("server - onrequest");//console.log ("inserisce un astring e la faccio scrivere")lato server
    reponse.writeHead(200,{"Content-Type":"text/plain"});//setto elementi di risposta//intestazione del protocollo http //200 protocollo ok//json
    reponse.write ("Ciao mondo!");
    reponse.end();
}