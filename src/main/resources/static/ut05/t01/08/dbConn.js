function CreateConn() {
    this.connect = () => {
        console.log("connect..");
    };
}

function testConn() {
    console.log("test connect..");
    new CreateConn().connect();
}

if (module.parent) {
    module.exports = CreateConn;
} else {
    testConn();
}
