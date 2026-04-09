const mysrvdemo = function(srv)
{
    srv.on("myfuncname", function(req , res) {
        return "Hello!";
    });
};

module.exports = mysrvdemo;