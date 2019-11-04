sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("valuedialog.valuedialog.controller.View1", {
		onValueHelp: function (oEvent) {

			var oDialog = new sap.ui.xmlfragment("valuedialog.valuedialog.fragment.selectdialog", this);

			this.getView().addDependent(oDialog);

			oDialog.bindAggregation("items", {

				path: "city>/city",

				template: new sap.m.StandardListItem({

					title: "{city>cityname}"

				})

			});
			oDialog.open();
		},
		_handleValueHelpClose: function (evt) {

				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
					var productInput = this.byId("input1");
					productInput.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			}

	});
});