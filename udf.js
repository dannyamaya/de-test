function transform(line) {
    var values = line.split(',');

    var obj = new Object();
    var fieldNames = "Incident_Number,Exposure_Number,ID,Address,Incident_Date,Call_Number,Alarm_DtTm,Arrival_DtTm,Close_DtTm,City,zipcode,Battalion,Station_Area,Box,Suppression_Units,Suppression_Personnel,EMS_Units,EMS_Personnel,Other_Units,Other_Personnel,First_Unit_On_Scene,Estimated_Property_Loss,Estimated_Contents_Loss,Fire_Fatalities,Fire_Injuries,Civilian_Fatalities,Civilian_Injuries,Number_of_Alarms,Primary_Situation,Mutual_Aid,Action_Taken_Primary,Action_Taken_Secondary,Action_Taken_Other,Detector_Alerted_Occupants,Property_Use,Area_of_Fire_Origin,Ignition_Cause,Ignition_Factor_Primary,Ignition_Factor_Secondary,Heat_Source,Item_First_Ignited,Human_Factors_Associated_with_Ignition,Structure_Type,Structure_Status,Floor_of_Fire_Origin,Fire_Spread,No_Flame_Spead,Number_of_floors_with_minimum_damage,Number_of_floors_with_significant_damage,Number_of_floors_with_heavy_damage,Number_of_floors_with_extreme_damage,Detectors_Present,Detector_Type,Detector_Operation,Detector_Effectiveness,Detector_Failure_Reason,Automatic_Extinguishing_System_Present,Automatic_Extinguishing_Sytem_Type,Automatic_Extinguishing_Sytem_Perfomance,Automatic_Extinguishing_Sytem_Failure_Reason,Number_of_Sprinkler_Heads_Operating,Supervisor_District,neighborhood_district,point";
    fieldNames = fieldNames.split(',');

    for (var index = 0; index < fieldNames.length; index++) {
        obj[fieldNames[index]] = values[index];
    }

    var jsonString = JSON.stringify(obj);
    return jsonString;
}