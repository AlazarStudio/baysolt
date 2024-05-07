export default function getDataFromDB(tableName, id) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "../admin/includes/CRUD/getDataFromDB.php",
            type: "POST",
            data: {
                id: id,
                tableName: tableName,
            },
            dataType: "json",
            success: function (data) {
                let dataArray = Object.values(data);
                resolve(dataArray);
            },
            error: function (xhr, status, error) {
                console.error("Error:", xhr, status, error);
                reject(error);
            },
        });
    });
}