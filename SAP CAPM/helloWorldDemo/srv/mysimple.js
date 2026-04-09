const mysrvdemo = function(srv)
{
    srv.on("myfuncname", function(req , res) {
        return "Hello world!";
    });
};

module.exports = mysrvdemo;