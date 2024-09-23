import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import moment from "moment";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

const getSchemaValidationErrorsStrings = (errorObj) => {
  let errMsg = {};
  for (const key in errorObj.errors) {
    if (Object.hasOwnProperty.call(errorObj.errors, key)) {
      const element = errorObj.errors[key];
      if (element?.message) {
        errMsg.push(element.message);
      }
    }
  }
  return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const InvoiceCreateDialogComponent = (props) => {
  const [_entity, set_entity] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const urlParams = useParams();

  useEffect(() => {
    set_entity(props.entity);
  }, [props.entity, props.show]);

  const onSave = async () => {
    let _data = {
      no: _entity?.no,
      invoicetype: _entity?.invoicetype,
      invoicedateandtime: _entity?.invoicedateandtime,
      originaleInvoicereferencenumber: _entity?.originaleInvoicereferencenumber,
      supplierSname: _entity?.supplierSname,
      supplierStin: _entity?.supplierStin,
      supplierSsstregistrationnumber: _entity?.supplierSsstregistrationnumber,
      supplierSidentifiertype: _entity?.supplierSidentifiertype,
      supplieridentifiernumber: _entity?.supplieridentifiernumber,
      supplierSmsiccode: _entity?.supplierSmsiccode,
      supplierStourismtaxregistrationnumber:
        _entity?.supplierStourismtaxregistrationnumber,
      supplierSbusinessactivitydescription:
        _entity?.supplierSbusinessactivitydescription,
      supplierSeMail: _entity?.supplierSeMail,
      thefirstsupplierScontactnumber: _entity?.thefirstsupplierScontactnumber,
      supplierScontactnumber: _entity?.supplierScontactnumber,
      suppliercountryname: _entity?.suppliercountryname,
      supplierstatename: _entity?.supplierstatename,
      suppliercityname: _entity?.suppliercityname,
      supplierpostalzone: _entity?.supplierpostalzone,
      buyerSname: _entity?.buyerSname,
      buyerStin: _entity?.buyerStin,
      buyerSsstregistrationnumber: _entity?.buyerSsstregistrationnumber,
      buyeridentifiertype: _entity?.buyeridentifiertype,
      businessregistrationnumberIdentificationnumberPassportnumber:
        _entity?.businessregistrationnumberIdentificationnumberPassportnumber,
      buyerSeMail: _entity?.buyerSeMail,
      buyerSaddressCountryname: _entity?.buyerSaddressCountryname,
      buyerSaddressStatename: _entity?.buyerSaddressStatename,
      buyerSaddressCityname: _entity?.buyerSaddressCityname,
      buyerSaddressPostalzone: _entity?.buyerSaddressPostalzone,
      thefirstbuyerScontactnumber: _entity?.thefirstbuyerScontactnumber,
      buyerScontactnumber: _entity?.buyerScontactnumber,
      paymentinformationinvoicecurrency:
        _entity?.paymentinformationinvoicecurrency,
      paymentinformationcurrencyexchangerate:
        _entity?.paymentinformationcurrencyexchangerate,
      paymentinformationfrequencyofbilling:
        _entity?.paymentinformationfrequencyofbilling,
      paymentinformationbillingperiodstartdate:
        _entity?.paymentinformationbillingperiodstartdate,
      paymentinformationbillingperiodenddate:
        _entity?.paymentinformationbillingperiodenddate,
      paymentinformationpaymentmode: _entity?.paymentinformationpaymentmode,
      paymentinformationsupplierSbankaccountnumber:
        _entity?.paymentinformationsupplierSbankaccountnumber,
      paymentinformationpaymentterms: _entity?.paymentinformationpaymentterms,
      paymentinformationprepaymentamount:
        _entity?.paymentinformationprepaymentamount,
      paymentinformationprepaymentdate:
        _entity?.paymentinformationprepaymentdate,
      paymentinformationprepaymentreferencenumber:
        _entity?.paymentinformationprepaymentreferencenumber,
      shippingrecipientSname: _entity?.shippingrecipientSname,
      shippingrecipientSaddresscountryname:
        _entity?.shippingrecipientSaddresscountryname,
      shippingrecipientSaddressstatename:
        _entity?.shippingrecipientSaddressstatename,
      shippingrecipientSaddresscityname:
        _entity?.shippingrecipientSaddresscityname,
      shippingrecipientSaddresspostalzone:
        _entity?.shippingrecipientSaddresspostalzone,
      shippingrecipientStin: _entity?.shippingrecipientStin,
      shippingrecipientSidentifiertype:
        _entity?.shippingrecipientSidentifiertype,
      shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber:
        _entity?.shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber,
      otherinformationbillreferencenumber:
        _entity?.otherinformationbillreferencenumber,
      otherinformationreferencenumberofcustomsformno19Etc:
        _entity?.otherinformationreferencenumberofcustomsformno19Etc,
      otherinformationincoterms: _entity?.otherinformationincoterms,
      otherinformationfreetradeagreementFtaInformation:
        _entity?.otherinformationfreetradeagreementFtaInformation,
      otherinformationauthorisationnumberforcertifiedexporter:
        _entity?.otherinformationauthorisationnumberforcertifiedexporter,
      otherinformationreferencenumberofcustomsformno2:
        _entity?.otherinformationreferencenumberofcustomsformno2,
      invoicelineno: _entity?.invoicelineno,
      invoicelineclassification: _entity?.invoicelineclassification,
      invoicelineproductname: _entity?.invoicelineproductname,
      invoicelinequantity: _entity?.invoicelinequantity,
      invoicelineunitprice: _entity?.invoicelineunitprice,
      invoicelinemeasurement: _entity?.invoicelinemeasurement,
      invoicelinesubtotal: _entity?.invoicelinesubtotal,
      invoicelinecountryoforigin: _entity?.invoicelinecountryoforigin,
      invoicelinetotalexcludingtax: _entity?.invoicelinetotalexcludingtax,
      invoicelinetaxtype: _entity?.invoicelinetaxtype,
      invoicelinetaxrate: _entity?.invoicelinetaxrate,
      invoicelinetaxamount: _entity?.invoicelinetaxamount,
      invoicelinedetailsoftaxexemption:
        _entity?.invoicelinedetailsoftaxexemption,
      invoicelinetaxexemptionamountexempted:
        _entity?.invoicelinetaxexemptionamountexempted,
      invoicelinediscountrate: _entity?.invoicelinediscountrate,
      discountdetailsofamount: _entity?.discountdetailsofamount,
      invoicelinedetailsofdiscountdescription:
        _entity?.invoicelinedetailsofdiscountdescription,
      invoicelinedetailsofchargefeeChargerate:
        _entity?.invoicelinedetailsofchargefeeChargerate,
      invoicelinedetailsofchargefeeChargeamount:
        _entity?.invoicelinedetailsofchargefeeChargeamount,
      detailsoftaxtaxtype: _entity?.detailsoftaxtaxtype,
      detailsoftaxtotaltaxableamountpertaxtype:
        _entity?.detailsoftaxtotaltaxableamountpertaxtype,
      detailsoftaxtotaltaxamountpertaxtype:
        _entity?.detailsoftaxtotaltaxamountpertaxtype,
      taxexemptiondetailsoftaxexemption:
        _entity?.taxexemptiondetailsoftaxexemption,
      taxexemptionamountexemptedfromtax:
        _entity?.taxexemptionamountexemptedfromtax,
      discountadditionaldiscountamount:
        _entity?.discountadditionaldiscountamount,
      discountadditionaldescription: _entity?.discountadditionaldescription,
      feeamountadditionalfeeamount: _entity?.feeamountadditionalfeeamount,
      feeamountadditionaldescription: _entity?.feeamountadditionaldescription,
      totaldiscountvalue: _entity?.totaldiscountvalue,
      totalfeeChargeamount: _entity?.totalfeeChargeamount,
      totaltaxamount: _entity?.totaltaxamount,
      totalexcludingtax: _entity?.totalexcludingtax,
      totalnetamount: _entity?.totalnetamount,
      totalincludingtax: _entity?.totalincludingtax,
      roundingamount: _entity?.roundingamount,
      totalpayableamount: _entity?.totalpayableamount,
      invoicenumber: _entity?.invoicenumber,
      consolidated: _entity?.consolidated,
    };

    setLoading(true);
    try {
      const result = await client.service("invoice").patch(_entity._id, _data);
      props.onHide();
      props.alert({
        type: "success",
        title: "Edit info",
        message: "Info invoice updated successfully",
      });
      props.onEditResult(result);
    } catch (error) {
      console.log("error", error);
      setError(
        getSchemaValidationErrorsStrings(error) || "Failed to update info",
      );
      props.alert({
        type: "error",
        title: "Edit info",
        message: "Failed to update info",
      });
    }
    setLoading(false);
  };

  const renderFooter = () => (
    <div className="flex justify-content-end">
      <Button
        label="save"
        className="p-button-text no-focus-effect"
        onClick={onSave}
        loading={loading}
      />
      <Button
        label="close"
        className="p-button-text no-focus-effect p-button-secondary"
        onClick={props.onHide}
      />
    </div>
  );

  const setValByKey = (key, val) => {
    let new_entity = { ..._entity, [key]: val };
    set_entity(new_entity);
    setError({});
  };

  return (
    <Dialog
      header="Edit Invoice"
      visible={props.show}
      closable={false}
      onHide={props.onHide}
      modal
      style={{ width: "40vw" }}
      className="min-w-max"
      footer={renderFooter()}
      resizable={false}
    >
      <div
        className="grid p-fluid overflow-y-auto"
        style={{ maxWidth: "55vw" }}
        role="invoice-edit-dialog-component"
      >
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="no">No:</label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicetype">Invoice Type (*):</label>
            <InputText
              id="invoicetype"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicetype}
              onChange={(e) => setValByKey("invoicetype", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicedateandtime">
              Invoice Date and Time (*):
            </label>
            <InputText
              id="invoicedateandtime"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicedateandtime}
              onChange={(e) =>
                setValByKey("invoicedateandtime", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="originaleInvoicereferencenumber">
              Original e-Invoice Reference Number:
            </label>
            <InputText
              id="originaleInvoicereferencenumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.originaleInvoicereferencenumber}
              onChange={(e) =>
                setValByKey("originaleInvoicereferencenumber", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierSname">Supplier's Name (*):</label>
            <InputText
              id="supplierSname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierSname}
              onChange={(e) => setValByKey("supplierSname", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierStin">Supplier's TIN (*):</label>
            <InputText
              id="supplierStin"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierStin}
              onChange={(e) => setValByKey("supplierStin", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierSsstregistrationnumber">
              Supplier's SST Registration Number:
            </label>
            <InputText
              id="supplierSsstregistrationnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierSsstregistrationnumber}
              onChange={(e) =>
                setValByKey("supplierSsstregistrationnumber", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierSidentifiertype">
              Supplier's Identifier Type (*):
            </label>
            <InputText
              id="supplierSidentifiertype"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierSidentifiertype}
              onChange={(e) =>
                setValByKey("supplierSidentifiertype", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplieridentifiernumber">
              Supplier Identifier Number (*):
            </label>
            <InputText
              id="supplieridentifiernumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplieridentifiernumber}
              onChange={(e) =>
                setValByKey("supplieridentifiernumber", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierSmsiccode">Supplier's MSIC code (*):</label>
            <InputText
              id="supplierSmsiccode"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierSmsiccode}
              onChange={(e) => setValByKey("supplierSmsiccode", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierStourismtaxregistrationnumber">
              Supplier's Tourism Tax Registration Number:
            </label>
            <InputText
              id="supplierStourismtaxregistrationnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierStourismtaxregistrationnumber}
              onChange={(e) =>
                setValByKey(
                  "supplierStourismtaxregistrationnumber",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierSbusinessactivitydescription">
              Supplier's Business Activity Description (*):
            </label>
            <InputText
              id="supplierSbusinessactivitydescription"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierSbusinessactivitydescription}
              onChange={(e) =>
                setValByKey(
                  "supplierSbusinessactivitydescription",
                  e.target.value,
                )
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierSeMail">Supplier's e-mail:</label>
            <InputText
              id="supplierSeMail"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierSeMail}
              onChange={(e) => setValByKey("supplierSeMail", e.target.value)}
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="thefirstsupplierScontactnumber">
              The first Supplier's contact number (*):
            </label>
            <InputText
              id="thefirstsupplierScontactnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.thefirstsupplierScontactnumber}
              onChange={(e) =>
                setValByKey("thefirstsupplierScontactnumber", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierScontactnumber">
              Supplier's contact number (*):
            </label>
            <InputText
              id="supplierScontactnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierScontactnumber}
              onChange={(e) =>
                setValByKey("supplierScontactnumber", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="suppliercountryname">
              Supplier Country name (*):
            </label>
            <InputText
              id="suppliercountryname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.suppliercountryname}
              onChange={(e) =>
                setValByKey("suppliercountryname", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierstatename">Supplier State name (*):</label>
            <InputText
              id="supplierstatename"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.supplierstatename}
              onChange={(e) => setValByKey("supplierstatename", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="suppliercityname">Supplier City name (*):</label>
            <InputText
              id="suppliercityname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.suppliercityname}
              onChange={(e) => setValByKey("suppliercityname", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="supplierpostalzone">Supplier Postal zone:</label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerSname">Buyer's name (*):</label>
            <InputText
              id="buyerSname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerSname}
              onChange={(e) => setValByKey("buyerSname", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerStin">Buyer's TIN:</label>
            <InputText
              id="buyerStin"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerStin}
              onChange={(e) => setValByKey("buyerStin", e.target.value)}
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerSsstregistrationnumber">
              Buyer's SST Registration Number:
            </label>
            <InputText
              id="buyerSsstregistrationnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerSsstregistrationnumber}
              onChange={(e) =>
                setValByKey("buyerSsstregistrationnumber", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyeridentifiertype">Buyer Identifier Type:</label>
            <InputText
              id="buyeridentifiertype"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyeridentifiertype}
              onChange={(e) =>
                setValByKey("buyeridentifiertype", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="businessregistrationnumberIdentificationnumberPassportnumber">
              Business registration number / Identification number / Passport
              number:
            </label>
            <InputText
              id="businessregistrationnumberIdentificationnumberPassportnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={
                _entity?.businessregistrationnumberIdentificationnumberPassportnumber
              }
              onChange={(e) =>
                setValByKey(
                  "businessregistrationnumberIdentificationnumberPassportnumber",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerSeMail">Buyer's e-mail:</label>
            <InputText
              id="buyerSeMail"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerSeMail}
              onChange={(e) => setValByKey("buyerSeMail", e.target.value)}
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerSaddressCountryname">
              Buyer's address (*) (Country name):
            </label>
            <InputText
              id="buyerSaddressCountryname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerSaddressCountryname}
              onChange={(e) =>
                setValByKey("buyerSaddressCountryname", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerSaddressStatename">
              Buyer's address (*) (State name):
            </label>
            <InputText
              id="buyerSaddressStatename"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerSaddressStatename}
              onChange={(e) =>
                setValByKey("buyerSaddressStatename", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerSaddressCityname">
              Buyer's address (City name):
            </label>
            <InputText
              id="buyerSaddressCityname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerSaddressCityname}
              onChange={(e) =>
                setValByKey("buyerSaddressCityname", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerSaddressPostalzone">
              Buyer's address (Postal zone):
            </label>
            <InputText
              id="buyerSaddressPostalzone"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerSaddressPostalzone}
              onChange={(e) =>
                setValByKey("buyerSaddressPostalzone", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="thefirstbuyerScontactnumber">
              The first buyer's contact number (*):
            </label>
            <InputText
              id="thefirstbuyerScontactnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.thefirstbuyerScontactnumber}
              onChange={(e) =>
                setValByKey("thefirstbuyerScontactnumber", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="buyerScontactnumber">
              Buyer's Contact Number (*):
            </label>
            <InputText
              id="buyerScontactnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.buyerScontactnumber}
              onChange={(e) =>
                setValByKey("buyerScontactnumber", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationinvoicecurrency">
              Payment information Invoice Currency (*):
            </label>
            <InputText
              id="paymentinformationinvoicecurrency"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationinvoicecurrency}
              onChange={(e) =>
                setValByKey("paymentinformationinvoicecurrency", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationcurrencyexchangerate">
              Payment information Currency Exchange Rate:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationfrequencyofbilling">
              Payment information Frequency of Billing:
            </label>
            <InputText
              id="paymentinformationfrequencyofbilling"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationfrequencyofbilling}
              onChange={(e) =>
                setValByKey(
                  "paymentinformationfrequencyofbilling",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationbillingperiodstartdate">
              Payment information Billing Period Start Date:
            </label>
            <InputText
              id="paymentinformationbillingperiodstartdate"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationbillingperiodstartdate}
              onChange={(e) =>
                setValByKey(
                  "paymentinformationbillingperiodstartdate",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationbillingperiodenddate">
              Payment information Billing Period End Date:
            </label>
            <InputText
              id="paymentinformationbillingperiodenddate"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationbillingperiodenddate}
              onChange={(e) =>
                setValByKey(
                  "paymentinformationbillingperiodenddate",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationpaymentmode">
              Payment information Payment Mode:
            </label>
            <InputText
              id="paymentinformationpaymentmode"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationpaymentmode}
              onChange={(e) =>
                setValByKey("paymentinformationpaymentmode", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationsupplierSbankaccountnumber">
              Payment information Supplier's Bank Account Number:
            </label>
            <InputText
              id="paymentinformationsupplierSbankaccountnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationsupplierSbankaccountnumber}
              onChange={(e) =>
                setValByKey(
                  "paymentinformationsupplierSbankaccountnumber",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationpaymentterms">
              Payment information Payment Terms:
            </label>
            <InputText
              id="paymentinformationpaymentterms"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationpaymentterms}
              onChange={(e) =>
                setValByKey("paymentinformationpaymentterms", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationprepaymentamount">
              Payment information PrePayment Amount:
            </label>
            <InputNumber
              id="paymentinformationprepaymentamount"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationprepaymentamount}
              onChange={(e) =>
                setValByKey("paymentinformationprepaymentamount", e.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationprepaymentdate">
              Payment information PrePayment Date:
            </label>
            <InputText
              id="paymentinformationprepaymentdate"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationprepaymentdate}
              onChange={(e) =>
                setValByKey("paymentinformationprepaymentdate", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="paymentinformationprepaymentreferencenumber">
              Payment information PrePayment Reference Number:
            </label>
            <InputText
              id="paymentinformationprepaymentreferencenumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.paymentinformationprepaymentreferencenumber}
              onChange={(e) =>
                setValByKey(
                  "paymentinformationprepaymentreferencenumber",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="shippingrecipientSname">
              Shipping Recipient's Name:
            </label>
            <InputText
              id="shippingrecipientSname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.shippingrecipientSname}
              onChange={(e) =>
                setValByKey("shippingrecipientSname", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="shippingrecipientSaddresscountryname">
              Shipping Recipient’s Address Country name:
            </label>
            <InputText
              id="shippingrecipientSaddresscountryname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.shippingrecipientSaddresscountryname}
              onChange={(e) =>
                setValByKey(
                  "shippingrecipientSaddresscountryname",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="shippingrecipientSaddressstatename">
              Shipping Recipient’s Address State name:
            </label>
            <InputText
              id="shippingrecipientSaddressstatename"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.shippingrecipientSaddressstatename}
              onChange={(e) =>
                setValByKey(
                  "shippingrecipientSaddressstatename",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="shippingrecipientSaddresscityname">
              Shipping Recipient’s Address City name:
            </label>
            <InputText
              id="shippingrecipientSaddresscityname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.shippingrecipientSaddresscityname}
              onChange={(e) =>
                setValByKey("shippingrecipientSaddresscityname", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="shippingrecipientSaddresspostalzone">
              Shipping Recipient’s Address Postal Zone:
            </label>
            <InputText
              id="shippingrecipientSaddresspostalzone"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.shippingrecipientSaddresspostalzone}
              onChange={(e) =>
                setValByKey(
                  "shippingrecipientSaddresspostalzone",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="shippingrecipientStin">
              Shipping Recipient's TIN:
            </label>
            <InputText
              id="shippingrecipientStin"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.shippingrecipientStin}
              onChange={(e) =>
                setValByKey("shippingrecipientStin", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="shippingrecipientSidentifiertype">
              Shipping Recipient's Identifier type:
            </label>
            <InputText
              id="shippingrecipientSidentifiertype"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.shippingrecipientSidentifiertype}
              onChange={(e) =>
                setValByKey("shippingrecipientSidentifiertype", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber">
              Shipping Recipient's Information Business registration number/
              Identification number / Passport number:
            </label>
            <InputText
              id="shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber"
              className="w-full mb-3 p-inputtext-sm"
              value={
                _entity?.shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber
              }
              onChange={(e) =>
                setValByKey(
                  "shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="otherinformationbillreferencenumber">
              Other Information Bill Reference Number:
            </label>
            <InputText
              id="otherinformationbillreferencenumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.otherinformationbillreferencenumber}
              onChange={(e) =>
                setValByKey(
                  "otherinformationbillreferencenumber",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="otherinformationreferencenumberofcustomsformno19Etc">
              Other Information Reference Number of Customs Form No.1, 9, etc.:
            </label>
            <InputText
              id="otherinformationreferencenumberofcustomsformno19Etc"
              className="w-full mb-3 p-inputtext-sm"
              value={
                _entity?.otherinformationreferencenumberofcustomsformno19Etc
              }
              onChange={(e) =>
                setValByKey(
                  "otherinformationreferencenumberofcustomsformno19Etc",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="otherinformationincoterms">
              Other Information Incoterms:
            </label>
            <InputText
              id="otherinformationincoterms"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.otherinformationincoterms}
              onChange={(e) =>
                setValByKey("otherinformationincoterms", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="otherinformationfreetradeagreementFtaInformation">
              Other Information Free Trade Agreement (FTA) Information:
            </label>
            <InputText
              id="otherinformationfreetradeagreementFtaInformation"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.otherinformationfreetradeagreementFtaInformation}
              onChange={(e) =>
                setValByKey(
                  "otherinformationfreetradeagreementFtaInformation",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="otherinformationauthorisationnumberforcertifiedexporter">
              Other Information Authorisation Number for Certified Exporter:
            </label>
            <InputText
              id="otherinformationauthorisationnumberforcertifiedexporter"
              className="w-full mb-3 p-inputtext-sm"
              value={
                _entity?.otherinformationauthorisationnumberforcertifiedexporter
              }
              onChange={(e) =>
                setValByKey(
                  "otherinformationauthorisationnumberforcertifiedexporter",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="otherinformationreferencenumberofcustomsformno2">
              Other Information Reference Number of Customs Form No.2:
            </label>
            <InputText
              id="otherinformationreferencenumberofcustomsformno2"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.otherinformationreferencenumberofcustomsformno2}
              onChange={(e) =>
                setValByKey(
                  "otherinformationreferencenumberofcustomsformno2",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelineno">Invoice Line No:</label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelineclassification">
              Invoice Line Classification (*):
            </label>
            <InputText
              id="invoicelineclassification"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelineclassification}
              onChange={(e) =>
                setValByKey("invoicelineclassification", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelineproductname">
              Invoice Line Product name (*):
            </label>
            <InputText
              id="invoicelineproductname"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelineproductname}
              onChange={(e) =>
                setValByKey("invoicelineproductname", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinequantity">Invoice Line Quantity:</label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelineunitprice">
              Invoice Line Unit Price (*):
            </label>
            <InputText
              id="invoicelineunitprice"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelineunitprice}
              onChange={(e) =>
                setValByKey("invoicelineunitprice", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinemeasurement">
              Invoice Line Measurement:
            </label>
            <InputText
              id="invoicelinemeasurement"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinemeasurement}
              onChange={(e) =>
                setValByKey("invoicelinemeasurement", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinesubtotal">
              Invoice Line Subtotal (*):
            </label>
            <InputText
              id="invoicelinesubtotal"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinesubtotal}
              onChange={(e) =>
                setValByKey("invoicelinesubtotal", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinecountryoforigin">
              Invoice Line Country of Origin:
            </label>
            <InputText
              id="invoicelinecountryoforigin"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinecountryoforigin}
              onChange={(e) =>
                setValByKey("invoicelinecountryoforigin", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinetotalexcludingtax">
              Invoice Line Total Excluding Tax(*):
            </label>
            <InputText
              id="invoicelinetotalexcludingtax"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinetotalexcludingtax}
              onChange={(e) =>
                setValByKey("invoicelinetotalexcludingtax", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinetaxtype">
              Invoice Line Tax Type (*):
            </label>
            <InputText
              id="invoicelinetaxtype"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinetaxtype}
              onChange={(e) =>
                setValByKey("invoicelinetaxtype", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinetaxrate">
              Invoice Line Tax Rate (%):
            </label>
            <InputText
              id="invoicelinetaxrate"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinetaxrate}
              onChange={(e) =>
                setValByKey("invoicelinetaxrate", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinetaxamount">
              Invoice Line Tax Amount (*):
            </label>
            <InputText
              id="invoicelinetaxamount"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinetaxamount}
              onChange={(e) =>
                setValByKey("invoicelinetaxamount", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinedetailsoftaxexemption">
              Invoice Line Details of Tax Exemption:
            </label>
            <InputText
              id="invoicelinedetailsoftaxexemption"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinedetailsoftaxexemption}
              onChange={(e) =>
                setValByKey("invoicelinedetailsoftaxexemption", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinetaxexemptionamountexempted">
              Invoice Line Tax Exemption Amount Exempted:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinediscountrate">
              Invoice Line Discount Rate (%):
            </label>
            <InputText
              id="invoicelinediscountrate"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinediscountrate}
              onChange={(e) =>
                setValByKey("invoicelinediscountrate", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="discountdetailsofamount">
              Discount Details of Amount:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinedetailsofdiscountdescription">
              Invoice Line Details of Discount Description:
            </label>
            <InputText
              id="invoicelinedetailsofdiscountdescription"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinedetailsofdiscountdescription}
              onChange={(e) =>
                setValByKey(
                  "invoicelinedetailsofdiscountdescription",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinedetailsofchargefeeChargerate">
              Invoice Line Details of Charge Fee/Charge Rate (%):
            </label>
            <InputText
              id="invoicelinedetailsofchargefeeChargerate"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinedetailsofchargefeeChargerate}
              onChange={(e) =>
                setValByKey(
                  "invoicelinedetailsofchargefeeChargerate",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicelinedetailsofchargefeeChargeamount">
              Invoice Line Details of Charge Fee/Charge Amount:
            </label>
            <InputText
              id="invoicelinedetailsofchargefeeChargeamount"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicelinedetailsofchargefeeChargeamount}
              onChange={(e) =>
                setValByKey(
                  "invoicelinedetailsofchargefeeChargeamount",
                  e.target.value,
                )
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="detailsoftaxtaxtype">
              Details of tax Tax Type (*):
            </label>
            <InputText
              id="detailsoftaxtaxtype"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.detailsoftaxtaxtype}
              onChange={(e) =>
                setValByKey("detailsoftaxtaxtype", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="detailsoftaxtotaltaxableamountpertaxtype">
              Details of tax Total Taxable Amount per Tax Type:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="detailsoftaxtotaltaxamountpertaxtype">
              Details of tax Total Tax Amount Per Tax Type (*):
            </label>
            <InputText
              id="detailsoftaxtotaltaxamountpertaxtype"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.detailsoftaxtotaltaxamountpertaxtype}
              onChange={(e) =>
                setValByKey(
                  "detailsoftaxtotaltaxamountpertaxtype",
                  e.target.value,
                )
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="taxexemptiondetailsoftaxexemption">
              Tax exemption Details of Tax Exemption:
            </label>
            <InputText
              id="taxexemptiondetailsoftaxexemption"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.taxexemptiondetailsoftaxexemption}
              onChange={(e) =>
                setValByKey("taxexemptiondetailsoftaxexemption", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="taxexemptionamountexemptedfromtax">
              Tax exemption Amount Exempted from Tax:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="discountadditionaldiscountamount">
              Discount Additional Discount Amount:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="discountadditionaldescription">
              Discount Additional Description:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="feeamountadditionalfeeamount">
              Fee Amount Additional Fee Amount:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="feeamountadditionaldescription">
              Fee Amount Additional Description:
            </label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="totaldiscountvalue">Total Discount Value:</label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="totalfeeChargeamount">
              Total Fee/Charge Amount:
            </label>
            <InputText
              id="totalfeeChargeamount"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.totalfeeChargeamount}
              onChange={(e) =>
                setValByKey("totalfeeChargeamount", e.target.value)
              }
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="totaltaxamount">Total Tax Amount (*):</label>
            <InputText
              id="totaltaxamount"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.totaltaxamount}
              onChange={(e) => setValByKey("totaltaxamount", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="totalexcludingtax">Total Excluding Tax (*):</label>
            <InputText
              id="totalexcludingtax"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.totalexcludingtax}
              onChange={(e) => setValByKey("totalexcludingtax", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="totalnetamount">Total Net Amount:</label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="totalincludingtax">Total Including Tax (*):</label>
            <InputText
              id="totalincludingtax"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.totalincludingtax}
              onChange={(e) => setValByKey("totalincludingtax", e.target.value)}
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="roundingamount">Rounding Amount:</label>
            undefined
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="totalpayableamount">
              Total Payable Amount (*):
            </label>
            <InputText
              id="totalpayableamount"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.totalpayableamount}
              onChange={(e) =>
                setValByKey("totalpayableamount", e.target.value)
              }
              required
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="invoicenumber">Invoice Number:</label>
            <InputText
              id="invoicenumber"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.invoicenumber}
              onChange={(e) => setValByKey("invoicenumber", e.target.value)}
            />
          </span>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <span className="align-items-center">
            <label htmlFor="consolidated">
              Original e-Invoice Reference Number:
            </label>
            <InputText
              id="consolidated"
              className="w-full mb-3 p-inputtext-sm"
              value={_entity?.consolidated}
              onChange={(e) => setValByKey("consolidated", e.target.value)}
            />
          </span>
        </div>
        <div className="col-12">&nbsp;</div>
        <div className="col-12 md:col-6 field mt-5">
          <p className="m-0">
            <Tag value="created At:"></Tag>
            {" " + moment(_entity?.createdAt).fromNow()}
          </p>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <p className="m-0">
            <Tag value="created By:"></Tag>
            {" " + _entity?.createdBy?.name}
          </p>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <p className="m-0">
            <Tag value="last Updated At:"></Tag>
            {" " + moment(_entity?.updatedAt).fromNow()}
          </p>
        </div>
        <div className="col-12 md:col-6 field mt-5">
          <p className="m-0">
            <Tag value="last Updated By:"></Tag>
            {" " + _entity?.updatedBy?.name}
          </p>
        </div>
        <small className="p-error">
          {Array.isArray(Object.keys(error))
            ? Object.keys(error).map((e, i) => (
                <p className="m-0" key={i}>
                  {e}: {error[e]}
                </p>
              ))
            : error}
        </small>
      </div>
    </Dialog>
  );
};

const mapState = (state) => {
  const { user } = state.auth;
  return { user };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InvoiceCreateDialogComponent);
