import contextPaths from "./context";





const urls={
 

    dash:contextPaths.dashboard+"/getweatherinfo",
    //appraisal
    addAppraisalVehicles:contextPaths.appraisal+"/addAppraiseVehicle",
    deleteAppraisal:contextPaths.appraisal+"/deleteAppraisal",
    getAppraisalcards:contextPaths.appraisal+"/apprList",
    getFavouriteCards:contextPaths.appraisal+"/getFavoriteCards",
    appraisalGetPic1:contextPaths.appraisal+"/downloadImage",
   
    checkVinNumberAvailable:contextPaths.appraisal+"/checkVehicleAvailable",
    moveToInventory:contextPaths.appraisal+"/moveToInventory",
    moveToWishList :contextPaths.appraisal+"/moveToWishList",
    removeFavorite :contextPaths.appraisal+"/removeFavorite",
    sendingEmail :contextPaths.appraisal+"/sendingEmail",
    showToUi :contextPaths.appraisal+"/showToUi",
    updateAppraiseVehicle :contextPaths.appraisal+"/updateAppraiseVehicle",
    updateDraftAppraisalVehicle:contextPaths.appraisal+"/updateDraftAppraiseVehicle",
    uploadImage :contextPaths.appraisal+"/uploadImage",
    uploadVideo :contextPaths.appraisal+"/uploadVideo",
    downloadVideo:contextPaths.appraisal+"/downloadVideo",
    draftApprVeh:contextPaths.appraisal+"/draftApprVeh",
    draftUpdateAppraisal:contextPaths.appraisal+"/updateDraftAppraiseVehicle",
  
  
    //configcodes
    dropDowns :contextPaths.configcodes+"/dropDowns",
    
 
 
    //Inventory
    getInventoryCards :contextPaths.inventory+"/getInventoryCards",
    getSearchFactory :contextPaths.inventory+"/getSearchFactory",
    buyCar:contextPaths.searchfactory+"/buyCar",
   
 
   
    //shipment
    shipmentGetPurCarCards :contextPaths.shipment+"/getPurCarCards",
    shipmentGetSoldCarCards :contextPaths.shipment+"/getSoldCarCards",
    
    //training portal    
    
    //user registration
    checkUser:contextPaths.userregistration+"/fetchUser",
    getUserDetails:contextPaths.userregistration+"/getUser",
    logIn:contextPaths.userregistration+"/findUser",
    showUser:contextPaths.userregistration+"/showUser",
    userRegister:contextPaths.userregistration+"/addUser",
    corporateDealerList:contextPaths.userregistration+"/corDlrList",
    usercount:contextPaths.userregistration+"/userCount",
    editUser:contextPaths.userregistration+"/editUser",
    uploadprofilePic:contextPaths.userregistration+"/uploadProPic",
    getProfilePic:contextPaths.userregistration+"/downloadImage",
 
 
   
    //filter urls
    appraisalFilter:contextPaths.appraisal+"/appraisalfilter",
    inventoryFilter:contextPaths.appraisal+"/inventoryfilter",
    searchFactoryFilter:contextPaths.appraisal+"/searchfactoryfilter",
    filterDropDown:contextPaths.configcodes+"/getAllFilterParams",
   
    //dealershipCheck
 
//uploadDocumentInRegistration

 
userProfilePicUpload:contextPaths.userregistration+"/uploadProfilePic",
 
//getProfilePic:contextPaths.userregistration+"/getProfilePic",
 
 
updateUser:contextPaths.userregistration+"/userUpdate",
//document print urls in shipment
printAppraisalReport:contextPaths.shipment+"/apprReportPdf",
   
    fetchAccessToken:contextPaths.appraisal+"/getAccessToken",
    deleteUser:contextPaths.userregistration+"/deleteUser",
   
    payment:contextPaths.shipment+"/payment",
    //Identity server
    getUserId:"/keyassure/user/getUserId",
   
 
 
}
export default urls;