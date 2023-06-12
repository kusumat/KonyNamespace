//Type your code here
dbObj = {};
 function convertToBase64(){
   var valBase64 = "MIICKTCCAZKgAwIBAgIESrI6bzANBgkqhkiG9w0BAQUFADBZMQswCQYDVQQGEwJpbjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1UECxMEa29ueTERMA8GA1UEAxMIcGF0dGFiaGkwHhcNMDkwOTE3MTMzMjMxWhcNMDkxMjE2MTMzMjMxWjBZMQswCQYDVQQGEwJpbjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1UECxMEa29ueTERMA8GA1UEAxMIcGF0dGFiaGkwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAIGPdqCQCtFgsy1sM494o1F07aN+UXgsilTuKsNRExOb03RGrg2WpAI8PqMXD1XzGZAg+qC9iQexpWHUjXgCYCbYrETvB3wNAToOrRE6mhZ0iaJij/0tLZACocLiTnvmzZU1B/xowvlioD3zsEs5N5n0U0fIsvW/22MZ6WtZuAZTAgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAXfOB1Mhx2R9ameeZz0hvCzYYSGcWsWNZaM7lMdBHFPzASYcVrmLj7JlLpuMm679A2p2JwXBsfetmhKse1ixqVeWdbe/FUfESU+8KrdvkcknvZaDqXYFxQAaVjTwWOn+zcDHf7LjjDohgDsMOJWXHkVQj2jooXqiktrBrpccm864=";
   
   var valrawBytes = kony.convertToRawBytes(valBase64);		
   var newbase64 = kony.convertToBase64(valrawBytes);
   kony.print("rawBytes----"+rawBytes);
   kony.print("newbase64----"+newbase64);
   alert(rawBytes);
   alert(newbase64);
 }

function convertToRawBytes(){
        var base64 = "MIICKTCCAZKgAwIBAgIESrI6bzANBgkqhkiG9w0BAQUFADBZMQswCQYDVQQGEwJpbjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1UECxMEa29ueTERMA8GA1UEAxMIcGF0dGFiaGkwHhcNMDkwOTE3MTMzMjMxWhcNMDkxMjE2MTMzMjMxWjBZMQswCQYDVQQGEwJpbjELMAkGA1UECBMCYXAxDDAKBgNVBAcTA2h5ZDENMAsGA1UEChMEa29ueTENMAsGA1UECxMEa29ueTERMA8GA1UEAxMIcGF0dGFiaGkwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAIGPdqCQCtFgsy1sM494o1F07aN+UXgsilTuKsNRExOb03RGrg2WpAI8PqMXD1XzGZAg+qC9iQexpWHUjXgCYCbYrETvB3wNAToOrRE6mhZ0iaJij/0tLZACocLiTnvmzZU1B/xowvlioD3zsEs5N5n0U0fIsvW/22MZ6WtZuAZTAgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAXfOB1Mhx2R9ameeZz0hvCzYYSGcWsWNZaM7lMdBHFPzASYcVrmLj7JlLpuMm679A2p2JwXBsfetmhKse1ixqVeWdbe/FUfESU+8KrdvkcknvZaDqXYFxQAaVjTwWOn+zcDHf7LjjDohgDsMOJWXHkVQj2jooXqiktrBrpccm864=";
		kony.convertToBase64(base64);
		var rawBytes = kony.convertToRawBytes(base64);
 	   alert(rawBytes);
}

//Function method in modules
 
 var arr = [];
arr.push("hello");
arr.push("world");
//kony.evaluateJavaScriptInNativeContext("userdefined",JSON.stringify(arr));

 //method in modules
 function userdefined(var1, var2)
{
     alert(var1+"-"+var2);
 }

function errorTest(){
  try {
    // Label to check UserData Type.
    var basicconf = {
        id: "lblWithUserData",
        text: "userdata",
        isVisible: true,
        skin: "sknlbl"
    };
    var layoutconf = {
        containerWeight: 100,
        hExpand: true,
        vExpand: true
    };
    var lbl1 = new kony.ui.lblproperty(basicconf, layoutconf, {});

    hbox.add(lbl1);
} catch (e) {
    var err = kony.getError(e);
kony.print("---------"+err);
    if (err)

        alert("A Kony error");
    else if(err)
    alert("A JavaScript Eval Eror");
}
}


function getProperty(){

   // this.view.lblproperty.text = "test msg";
  var testdata = kony.props.getProperty(null,"key1");
  this.view.lblproperty.text = testdata;
}

function print(){
  alert("This is a test message.");
}


kony.runOnMainThread(mainthread, []);
function mainthread () {
   alert("Running on On Main Thread");
}

kony.runOnWorkerThread(workermethod, []);
function workermethod () {
   alert("Running on On Worker Thread");
}

function getType(){
  var myVal = 2000;
  var varType = kony.type(myVal);//Returns a number
  alert("2000"+ " is "+varType);
  
  var myVal = "Hello";
  var varType = kony.type(myVal);//Returns a string
  alert("Hello"+" is " +varType);
  
 
}

// kony.screenshot(config)
// config = {
// "callback": function(imageData) {
//   kony.print(imageData);
//  } //The imageData parameter contains the base64 String of the screenshot.
// };
// kony.screenshot(config);





//****************** No SQL API ************************

function openDatabase(){
 kony.nosql.openDatabase('Company', 1, function(dbObject) {
    kony.nosql.createTable(dbObject, 'EMP', {
        primaryKey: 'Emp_id',
        indexes: {
            'Emp_id': {},
            'Emp_name': {},
            'Emp_manager': {},
            'Emp_DOJ': {},
            'Emp_email': {
                unique: true
            }
        }
    });
   
}).then(function(dbObject) {
   //kony.store.setItem("dbObjVal", dbObject);
   //kony.ds.save(dbObject,"dbObjectVal",{dsmode:"session"});
   dbObj = dbObject;
   alert("created success"+JSON.stringify(dbObj));
}).catch(function(errorObject) {
    //error callback
   alert("Error occured");
});
}



function testAdd(){
//var dbObject = kony.store.getItem("dbObjVal");
  //var dsRead = kony.ds.read("dbObjectVal");
//   var dbObject ={
//     'Emp_id': 1234,
//         'Emp_name': 'abc',
//         'Emp_manager': 'def'
//   };
 // alert(dbObj);
  kony.nosql.openTransaction(dbObj, 'EMP', kony.nosql.READ_WRITE, function(transaction) {
    kony.nosql.addRecords(transaction, 'EMP', [{
        'Emp_id': 1234,
        'Emp_name': 'abc',
        'Emp_manager': 'def'
    }, {
        'Emp_id': 1235,
        'Emp_name': 'efg',
        'Emp_manager': 'xyz'
    }, {
        'Emp_id': 1236,
        'Emp_name': 'ijk',
        'Emp_manager': 'def'
    }]).then(function() {
        //add records success callback
      alert("data added successfully");
    }).
    catch(function(errorObject) {
        //add records error callback
      alert("error occured");
    });
}).then(function(transaction) {
    //transaction complete callback
    kony.print("data added transaction complete");
});
}

function addOrReplaceRecordsData(){
 // alert(dbObj);
  kony.nosql.openTransaction(dbObj, 'EMP', kony.nosql.READ_WRITE, function(transactionObject) {
    kony.nosql.addOrReplaceRecords(transactionObject, 'EMP', [{
     Emp_id: 7777,
	Emp_name: 'rajendra'
    },{
     Emp_id: 8888,
	Emp_name: 'avijit'
    }]).then(function() {
     
      alert("addOrReplaceRecords records success");
    }).
    catch (function(errorObject) {
      
      alert("Error occured");
    });
}).then(function(transactionObject) {
    kony.print("transaction complete");
    
});
}

function databaseExistsCheck(){
  
kony.nosql.databaseExists('Company').then(function(isExists) {
    //successcallback
  //debugger
  if(isExists){
       alert("database exist");
  }else{
       alert("database not exist");
  }
}).
catch(function(errorObject) {
    //error callback
  alert("database not exist"+errorObject);
});
}

function deleteDatabase(){
kony.nosql.deleteDatabase('Company').then(function() 
{
   //success callback
  alert("Deleted");
}).
catch(function(errorObject) 
{
   //error callback
  alert("database not deleted");
});
  }
