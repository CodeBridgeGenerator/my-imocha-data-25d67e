import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleInvoicePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("invoice")
            .get(urlParams.singleInvoiceId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Invoice", type: "error", message: error.message || "Failed get invoice" });
            });
    }, [props,urlParams.singleInvoiceId]);


    const goBack = () => {
        navigate("/invoice");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Invoice</h3>
                </div>
                <p>invoice/{urlParams.singleInvoiceId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Type (*)</label><p className="m-0 ml-3" >{_entity?.invoicetype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Date and Time (*)</label><p className="m-0 ml-3" >{_entity?.invoicedateandtime}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Original e-Invoice Reference Number</label><p className="m-0 ml-3" >{_entity?.originaleInvoicereferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Name (*)</label><p className="m-0 ml-3" >{_entity?.supplierSname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's TIN (*)</label><p className="m-0 ml-3" >{_entity?.supplierStin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's SST Registration Number</label><p className="m-0 ml-3" >{_entity?.supplierSsstregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Identifier Type (*)</label><p className="m-0 ml-3" >{_entity?.supplierSidentifiertype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Identifier Number (*)</label><p className="m-0 ml-3" >{_entity?.supplieridentifiernumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's MSIC code (*)</label><p className="m-0 ml-3" >{_entity?.supplierSmsiccode}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Tourism Tax Registration Number</label><p className="m-0 ml-3" >{_entity?.supplierStourismtaxregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Business Activity Description (*)</label><p className="m-0 ml-3" >{_entity?.supplierSbusinessactivitydescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's e-mail</label><p className="m-0 ml-3" >{_entity?.supplierSeMail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">The first Supplier's contact number (*)</label><p className="m-0 ml-3" >{_entity?.thefirstsupplierScontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's contact number (*)</label><p className="m-0 ml-3" >{_entity?.supplierScontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Country name (*)</label><p className="m-0 ml-3" >{_entity?.suppliercountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier State name (*)</label><p className="m-0 ml-3" >{_entity?.supplierstatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier City name (*)</label><p className="m-0 ml-3" >{_entity?.suppliercityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's name (*)</label><p className="m-0 ml-3" >{_entity?.buyerSname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's TIN</label><p className="m-0 ml-3" >{_entity?.buyerStin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's SST Registration Number</label><p className="m-0 ml-3" >{_entity?.buyerSsstregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Identifier Type</label><p className="m-0 ml-3" >{_entity?.buyeridentifiertype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Business registration number / Identification number / Passport number</label><p className="m-0 ml-3" >{_entity?.businessregistrationnumberIdentificationnumberPassportnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's e-mail</label><p className="m-0 ml-3" >{_entity?.buyerSeMail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (*) (Country name)</label><p className="m-0 ml-3" >{_entity?.buyerSaddressCountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (*) (State name)</label><p className="m-0 ml-3" >{_entity?.buyerSaddressStatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (City name)</label><p className="m-0 ml-3" >{_entity?.buyerSaddressCityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (Postal zone)</label><p className="m-0 ml-3" >{_entity?.buyerSaddressPostalzone}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">The first buyer's contact number (*)</label><p className="m-0 ml-3" >{_entity?.thefirstbuyerScontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's Contact Number (*)</label><p className="m-0 ml-3" >{_entity?.buyerScontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Invoice Currency (*)</label><p className="m-0 ml-3" >{_entity?.paymentinformationinvoicecurrency}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Frequency of Billing</label><p className="m-0 ml-3" >{_entity?.paymentinformationfrequencyofbilling}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Billing Period Start Date</label><p className="m-0 ml-3" >{_entity?.paymentinformationbillingperiodstartdate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Billing Period End Date</label><p className="m-0 ml-3" >{_entity?.paymentinformationbillingperiodenddate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Payment Mode</label><p className="m-0 ml-3" >{_entity?.paymentinformationpaymentmode}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Supplier's Bank Account Number</label><p className="m-0 ml-3" >{_entity?.paymentinformationsupplierSbankaccountnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Payment Terms</label><p className="m-0 ml-3" >{_entity?.paymentinformationpaymentterms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information PrePayment Amount</label><p className="m-0 ml-3" >{Number(_entity?.paymentinformationprepaymentamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information PrePayment Date</label><p className="m-0 ml-3" >{_entity?.paymentinformationprepaymentdate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information PrePayment Reference Number</label><p className="m-0 ml-3" >{_entity?.paymentinformationprepaymentreferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's Name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address Country name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSaddresscountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address State name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSaddressstatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address City name</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSaddresscityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address Postal Zone</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSaddresspostalzone}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's TIN</label><p className="m-0 ml-3" >{_entity?.shippingrecipientStin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's Identifier type</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSidentifiertype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's Information Business registration number/ Identification number / Passport number</label><p className="m-0 ml-3" >{_entity?.shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Bill  Reference Number</label><p className="m-0 ml-3" >{_entity?.otherinformationbillreferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Reference Number of Customs Form No.1, 9, etc.</label><p className="m-0 ml-3" >{_entity?.otherinformationreferencenumberofcustomsformno19Etc}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Incoterms</label><p className="m-0 ml-3" >{_entity?.otherinformationincoterms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Free Trade Agreement (FTA) Information</label><p className="m-0 ml-3" >{_entity?.otherinformationfreetradeagreementFtaInformation}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Authorisation Number for Certified Exporter</label><p className="m-0 ml-3" >{_entity?.otherinformationauthorisationnumberforcertifiedexporter}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Reference Number of Customs Form No.2</label><p className="m-0 ml-3" >{_entity?.otherinformationreferencenumberofcustomsformno2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Classification (*)</label><p className="m-0 ml-3" >{_entity?.invoicelineclassification}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Product name (*)</label><p className="m-0 ml-3" >{_entity?.invoicelineproductname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Unit Price (*)</label><p className="m-0 ml-3" >{_entity?.invoicelineunitprice}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Measurement</label><p className="m-0 ml-3" >{_entity?.invoicelinemeasurement}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Subtotal (*)</label><p className="m-0 ml-3" >{_entity?.invoicelinesubtotal}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Country of Origin</label><p className="m-0 ml-3" >{_entity?.invoicelinecountryoforigin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Total Excluding Tax(*)</label><p className="m-0 ml-3" >{_entity?.invoicelinetotalexcludingtax}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Tax Type (*)</label><p className="m-0 ml-3" >{_entity?.invoicelinetaxtype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Tax Rate (%)</label><p className="m-0 ml-3" >{_entity?.invoicelinetaxrate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Tax Amount (*)</label><p className="m-0 ml-3" >{_entity?.invoicelinetaxamount}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Details of Tax Exemption</label><p className="m-0 ml-3" >{_entity?.invoicelinedetailsoftaxexemption}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Discount Rate (%)</label><p className="m-0 ml-3" >{_entity?.invoicelinediscountrate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Details of Discount Description</label><p className="m-0 ml-3" >{_entity?.invoicelinedetailsofdiscountdescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Details of Charge Fee/Charge Rate (%)</label><p className="m-0 ml-3" >{_entity?.invoicelinedetailsofchargefeeChargerate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Details of Charge Fee/Charge Amount</label><p className="m-0 ml-3" >{_entity?.invoicelinedetailsofchargefeeChargeamount}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Details of tax Tax Type (*)</label><p className="m-0 ml-3" >{_entity?.detailsoftaxtaxtype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Details of tax Total Tax Amount Per Tax Type (*)</label><p className="m-0 ml-3" >{_entity?.detailsoftaxtotaltaxamountpertaxtype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tax exemption Details of Tax Exemption</label><p className="m-0 ml-3" >{_entity?.taxexemptiondetailsoftaxexemption}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Fee/Charge Amount</label><p className="m-0 ml-3" >{_entity?.totalfeeChargeamount}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Tax Amount (*)</label><p className="m-0 ml-3" >{_entity?.totaltaxamount}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Excluding Tax (*)</label><p className="m-0 ml-3" >{_entity?.totalexcludingtax}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Including Tax (*)</label><p className="m-0 ml-3" >{_entity?.totalincludingtax}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Payable Amount (*)</label><p className="m-0 ml-3" >{_entity?.totalpayableamount}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Number</label><p className="m-0 ml-3" >{_entity?.invoicenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Original e-Invoice Reference Number</label><p className="m-0 ml-3" >{_entity?.consolidated}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleInvoicePage);
