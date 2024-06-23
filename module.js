$("#contentType").change(function () {
    $("#industry").val('');
    $("#usecase").val('');
    this.form.submit();
});

$("#useCase").change(function () {
    $("#contentType").val('');
    $("#industry").val('');
    this.form.submit();
});

$("#industry").change(function () {
    $("#contentType").val('');
    $("#usecase").val('');
    this.form.submit();
});