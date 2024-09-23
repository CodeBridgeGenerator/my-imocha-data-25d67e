import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState, useRef } from "react";
import _ from "lodash";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const InvoiceDataTable = ({
  items,
  fields,
  onEditRow,
  onRowDelete,
  onRowClick,
  searchDialog,
  setSearchDialog,
  showUpload,
  setShowUpload,
  showFilter,
  setShowFilter,
  showColumns,
  setShowColumns,
  onClickSaveFilteredfields,
  selectedFilterFields,
  setSelectedFilterFields,
  selectedHideFields,
  setSelectedHideFields,
  onClickSaveHiddenfields,
  loading,
  user,
}) => {
  const dt = useRef(null);
  const urlParams = useParams();
  const [globalFilter, setGlobalFilter] = useState("");

  const p_dateTemplate0 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.no).toLocaleDateString()}</p>
  );
  const pTemplate1 = (rowData, { rowIndex }) => <p>{rowData.invoicetype}</p>;
  const pTemplate2 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicedateandtime}</p>
  );
  const pTemplate3 = (rowData, { rowIndex }) => (
    <p>{rowData.originaleInvoicereferencenumber}</p>
  );
  const pTemplate4 = (rowData, { rowIndex }) => <p>{rowData.supplierSname}</p>;
  const pTemplate5 = (rowData, { rowIndex }) => <p>{rowData.supplierStin}</p>;
  const pTemplate6 = (rowData, { rowIndex }) => (
    <p>{rowData.supplierSsstregistrationnumber}</p>
  );
  const pTemplate7 = (rowData, { rowIndex }) => (
    <p>{rowData.supplierSidentifiertype}</p>
  );
  const pTemplate8 = (rowData, { rowIndex }) => (
    <p>{rowData.supplieridentifiernumber}</p>
  );
  const pTemplate9 = (rowData, { rowIndex }) => (
    <p>{rowData.supplierSmsiccode}</p>
  );
  const pTemplate10 = (rowData, { rowIndex }) => (
    <p>{rowData.supplierStourismtaxregistrationnumber}</p>
  );
  const pTemplate11 = (rowData, { rowIndex }) => (
    <p>{rowData.supplierSbusinessactivitydescription}</p>
  );
  const pTemplate12 = (rowData, { rowIndex }) => (
    <p>{rowData.supplierSeMail}</p>
  );
  const pTemplate13 = (rowData, { rowIndex }) => (
    <p>{rowData.thefirstsupplierScontactnumber}</p>
  );
  const pTemplate14 = (rowData, { rowIndex }) => (
    <p>{rowData.supplierScontactnumber}</p>
  );
  const pTemplate15 = (rowData, { rowIndex }) => (
    <p>{rowData.suppliercountryname}</p>
  );
  const pTemplate16 = (rowData, { rowIndex }) => (
    <p>{rowData.supplierstatename}</p>
  );
  const pTemplate17 = (rowData, { rowIndex }) => (
    <p>{rowData.suppliercityname}</p>
  );
  const p_dateTemplate18 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.supplierpostalzone).toLocaleDateString()}</p>
  );
  const pTemplate19 = (rowData, { rowIndex }) => <p>{rowData.buyerSname}</p>;
  const pTemplate20 = (rowData, { rowIndex }) => <p>{rowData.buyerStin}</p>;
  const pTemplate21 = (rowData, { rowIndex }) => (
    <p>{rowData.buyerSsstregistrationnumber}</p>
  );
  const pTemplate22 = (rowData, { rowIndex }) => (
    <p>{rowData.buyeridentifiertype}</p>
  );
  const pTemplate23 = (rowData, { rowIndex }) => (
    <p>
      {rowData.businessregistrationnumberIdentificationnumberPassportnumber}
    </p>
  );
  const pTemplate24 = (rowData, { rowIndex }) => <p>{rowData.buyerSeMail}</p>;
  const pTemplate25 = (rowData, { rowIndex }) => (
    <p>{rowData.buyerSaddressCountryname}</p>
  );
  const pTemplate26 = (rowData, { rowIndex }) => (
    <p>{rowData.buyerSaddressStatename}</p>
  );
  const pTemplate27 = (rowData, { rowIndex }) => (
    <p>{rowData.buyerSaddressCityname}</p>
  );
  const pTemplate28 = (rowData, { rowIndex }) => (
    <p>{rowData.buyerSaddressPostalzone}</p>
  );
  const pTemplate29 = (rowData, { rowIndex }) => (
    <p>{rowData.thefirstbuyerScontactnumber}</p>
  );
  const pTemplate30 = (rowData, { rowIndex }) => (
    <p>{rowData.buyerScontactnumber}</p>
  );
  const pTemplate31 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationinvoicecurrency}</p>
  );
  const p_dateTemplate32 = (rowData, { rowIndex }) => (
    <p>
      {new Date(
        rowData.paymentinformationcurrencyexchangerate,
      ).toLocaleDateString()}
    </p>
  );
  const pTemplate33 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationfrequencyofbilling}</p>
  );
  const pTemplate34 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationbillingperiodstartdate}</p>
  );
  const pTemplate35 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationbillingperiodenddate}</p>
  );
  const pTemplate36 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationpaymentmode}</p>
  );
  const pTemplate37 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationsupplierSbankaccountnumber}</p>
  );
  const pTemplate38 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationpaymentterms}</p>
  );
  const p_numberTemplate39 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationprepaymentamount}</p>
  );
  const pTemplate40 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationprepaymentdate}</p>
  );
  const pTemplate41 = (rowData, { rowIndex }) => (
    <p>{rowData.paymentinformationprepaymentreferencenumber}</p>
  );
  const pTemplate42 = (rowData, { rowIndex }) => (
    <p>{rowData.shippingrecipientSname}</p>
  );
  const pTemplate43 = (rowData, { rowIndex }) => (
    <p>{rowData.shippingrecipientSaddresscountryname}</p>
  );
  const pTemplate44 = (rowData, { rowIndex }) => (
    <p>{rowData.shippingrecipientSaddressstatename}</p>
  );
  const pTemplate45 = (rowData, { rowIndex }) => (
    <p>{rowData.shippingrecipientSaddresscityname}</p>
  );
  const pTemplate46 = (rowData, { rowIndex }) => (
    <p>{rowData.shippingrecipientSaddresspostalzone}</p>
  );
  const pTemplate47 = (rowData, { rowIndex }) => (
    <p>{rowData.shippingrecipientStin}</p>
  );
  const pTemplate48 = (rowData, { rowIndex }) => (
    <p>{rowData.shippingrecipientSidentifiertype}</p>
  );
  const pTemplate49 = (rowData, { rowIndex }) => (
    <p>
      {
        rowData.shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber
      }
    </p>
  );
  const pTemplate50 = (rowData, { rowIndex }) => (
    <p>{rowData.otherinformationbillreferencenumber}</p>
  );
  const pTemplate51 = (rowData, { rowIndex }) => (
    <p>{rowData.otherinformationreferencenumberofcustomsformno19Etc}</p>
  );
  const pTemplate52 = (rowData, { rowIndex }) => (
    <p>{rowData.otherinformationincoterms}</p>
  );
  const pTemplate53 = (rowData, { rowIndex }) => (
    <p>{rowData.otherinformationfreetradeagreementFtaInformation}</p>
  );
  const pTemplate54 = (rowData, { rowIndex }) => (
    <p>{rowData.otherinformationauthorisationnumberforcertifiedexporter}</p>
  );
  const pTemplate55 = (rowData, { rowIndex }) => (
    <p>{rowData.otherinformationreferencenumberofcustomsformno2}</p>
  );
  const p_dateTemplate56 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.invoicelineno).toLocaleDateString()}</p>
  );
  const pTemplate57 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelineclassification}</p>
  );
  const pTemplate58 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelineproductname}</p>
  );
  const p_dateTemplate59 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.invoicelinequantity).toLocaleDateString()}</p>
  );
  const pTemplate60 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelineunitprice}</p>
  );
  const pTemplate61 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinemeasurement}</p>
  );
  const pTemplate62 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinesubtotal}</p>
  );
  const pTemplate63 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinecountryoforigin}</p>
  );
  const pTemplate64 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinetotalexcludingtax}</p>
  );
  const pTemplate65 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinetaxtype}</p>
  );
  const pTemplate66 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinetaxrate}</p>
  );
  const pTemplate67 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinetaxamount}</p>
  );
  const pTemplate68 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinedetailsoftaxexemption}</p>
  );
  const p_dateTemplate69 = (rowData, { rowIndex }) => (
    <p>
      {new Date(
        rowData.invoicelinetaxexemptionamountexempted,
      ).toLocaleDateString()}
    </p>
  );
  const pTemplate70 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinediscountrate}</p>
  );
  const p_dateTemplate71 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.discountdetailsofamount).toLocaleDateString()}</p>
  );
  const pTemplate72 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinedetailsofdiscountdescription}</p>
  );
  const pTemplate73 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinedetailsofchargefeeChargerate}</p>
  );
  const pTemplate74 = (rowData, { rowIndex }) => (
    <p>{rowData.invoicelinedetailsofchargefeeChargeamount}</p>
  );
  const pTemplate75 = (rowData, { rowIndex }) => (
    <p>{rowData.detailsoftaxtaxtype}</p>
  );
  const p_dateTemplate76 = (rowData, { rowIndex }) => (
    <p>
      {new Date(
        rowData.detailsoftaxtotaltaxableamountpertaxtype,
      ).toLocaleDateString()}
    </p>
  );
  const pTemplate77 = (rowData, { rowIndex }) => (
    <p>{rowData.detailsoftaxtotaltaxamountpertaxtype}</p>
  );
  const pTemplate78 = (rowData, { rowIndex }) => (
    <p>{rowData.taxexemptiondetailsoftaxexemption}</p>
  );
  const p_dateTemplate79 = (rowData, { rowIndex }) => (
    <p>
      {new Date(rowData.taxexemptionamountexemptedfromtax).toLocaleDateString()}
    </p>
  );
  const p_dateTemplate80 = (rowData, { rowIndex }) => (
    <p>
      {new Date(rowData.discountadditionaldiscountamount).toLocaleDateString()}
    </p>
  );
  const p_dateTemplate81 = (rowData, { rowIndex }) => (
    <p>
      {new Date(rowData.discountadditionaldescription).toLocaleDateString()}
    </p>
  );
  const p_dateTemplate82 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.feeamountadditionalfeeamount).toLocaleDateString()}</p>
  );
  const p_dateTemplate83 = (rowData, { rowIndex }) => (
    <p>
      {new Date(rowData.feeamountadditionaldescription).toLocaleDateString()}
    </p>
  );
  const p_dateTemplate84 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.totaldiscountvalue).toLocaleDateString()}</p>
  );
  const pTemplate85 = (rowData, { rowIndex }) => (
    <p>{rowData.totalfeeChargeamount}</p>
  );
  const pTemplate86 = (rowData, { rowIndex }) => (
    <p>{rowData.totaltaxamount}</p>
  );
  const pTemplate87 = (rowData, { rowIndex }) => (
    <p>{rowData.totalexcludingtax}</p>
  );
  const p_dateTemplate88 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.totalnetamount).toLocaleDateString()}</p>
  );
  const pTemplate89 = (rowData, { rowIndex }) => (
    <p>{rowData.totalincludingtax}</p>
  );
  const p_dateTemplate90 = (rowData, { rowIndex }) => (
    <p>{new Date(rowData.roundingamount).toLocaleDateString()}</p>
  );
  const pTemplate91 = (rowData, { rowIndex }) => (
    <p>{rowData.totalpayableamount}</p>
  );
  const pTemplate92 = (rowData, { rowIndex }) => <p>{rowData.invoicenumber}</p>;
  const pTemplate93 = (rowData, { rowIndex }) => <p>{rowData.consolidated}</p>;
  const editTemplate = (rowData, { rowIndex }) => (
    <Button
      onClick={() => onEditRow(rowData, rowIndex)}
      icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`}
      className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`}
    />
  );
  const deleteTemplate = (rowData, { rowIndex }) => (
    <Button
      onClick={() => onRowDelete(rowData._id)}
      icon="pi pi-times"
      className="p-button-rounded p-button-danger p-button-text"
    />
  );
  const pCreatedAt = (rowData, { rowIndex }) => (
    <p>{moment(rowData.createdAt).fromNow()}</p>
  );
  const pUpdatedAt = (rowData, { rowIndex }) => (
    <p>{moment(rowData.updatedAt).fromNow()}</p>
  );
  const pCreatedBy = (rowData, { rowIndex }) => (
    <p>{rowData.createdBy?.name}</p>
  );
  const pUpdatedBy = (rowData, { rowIndex }) => (
    <p>{rowData.updatedBy?.name}</p>
  );
  const paginatorLeft = (
    <Button
      type="button"
      icon="pi pi-upload"
      text
      onClick={() => setShowUpload(true)}
      disabled={!true}
    />
  );
  const paginatorRight = DownloadCSV({ data: items, fileName: "invoice" });
  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  return (
    <>
      <DataTable
        value={items}
        ref={dt}
        removableSort
        onRowClick={onRowClick}
        scrollable
        rowHover
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[10, 50, 250, 500]}
        size={"small"}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        rowClassName="cursor-pointer"
        alwaysShowPaginator={!urlParams.singleUsersId}
        loading={loading}
      >
        <Column
          field="no"
          header="No"
          body={p_dateTemplate0}
          filter={selectedFilterFields.includes("no")}
          hidden={selectedHideFields?.includes("no")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicetype"
          header="Invoice Type (*)"
          body={pTemplate1}
          filter={selectedFilterFields.includes("invoicetype")}
          hidden={selectedHideFields?.includes("invoicetype")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicedateandtime"
          header="Invoice Date and Time (*)"
          body={pTemplate2}
          filter={selectedFilterFields.includes("invoicedateandtime")}
          hidden={selectedHideFields?.includes("invoicedateandtime")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="originaleInvoicereferencenumber"
          header="Original e-Invoice Reference Number"
          body={pTemplate3}
          filter={selectedFilterFields.includes(
            "originaleInvoicereferencenumber",
          )}
          hidden={selectedHideFields?.includes(
            "originaleInvoicereferencenumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierSname"
          header="Supplier's Name (*)"
          body={pTemplate4}
          filter={selectedFilterFields.includes("supplierSname")}
          hidden={selectedHideFields?.includes("supplierSname")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierStin"
          header="Supplier's TIN (*)"
          body={pTemplate5}
          filter={selectedFilterFields.includes("supplierStin")}
          hidden={selectedHideFields?.includes("supplierStin")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierSsstregistrationnumber"
          header="Supplier's SST Registration Number"
          body={pTemplate6}
          filter={selectedFilterFields.includes(
            "supplierSsstregistrationnumber",
          )}
          hidden={selectedHideFields?.includes(
            "supplierSsstregistrationnumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierSidentifiertype"
          header="Supplier's Identifier Type (*)"
          body={pTemplate7}
          filter={selectedFilterFields.includes("supplierSidentifiertype")}
          hidden={selectedHideFields?.includes("supplierSidentifiertype")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplieridentifiernumber"
          header="Supplier Identifier Number (*)"
          body={pTemplate8}
          filter={selectedFilterFields.includes("supplieridentifiernumber")}
          hidden={selectedHideFields?.includes("supplieridentifiernumber")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierSmsiccode"
          header="Supplier's MSIC code (*)"
          body={pTemplate9}
          filter={selectedFilterFields.includes("supplierSmsiccode")}
          hidden={selectedHideFields?.includes("supplierSmsiccode")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierStourismtaxregistrationnumber"
          header="Supplier's Tourism Tax Registration Number"
          body={pTemplate10}
          filter={selectedFilterFields.includes(
            "supplierStourismtaxregistrationnumber",
          )}
          hidden={selectedHideFields?.includes(
            "supplierStourismtaxregistrationnumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierSbusinessactivitydescription"
          header="Supplier's Business Activity Description (*)"
          body={pTemplate11}
          filter={selectedFilterFields.includes(
            "supplierSbusinessactivitydescription",
          )}
          hidden={selectedHideFields?.includes(
            "supplierSbusinessactivitydescription",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierSeMail"
          header="Supplier's e-mail"
          body={pTemplate12}
          filter={selectedFilterFields.includes("supplierSeMail")}
          hidden={selectedHideFields?.includes("supplierSeMail")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="thefirstsupplierScontactnumber"
          header="The first Supplier's contact number (*)"
          body={pTemplate13}
          filter={selectedFilterFields.includes(
            "thefirstsupplierScontactnumber",
          )}
          hidden={selectedHideFields?.includes(
            "thefirstsupplierScontactnumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierScontactnumber"
          header="Supplier's contact number (*)"
          body={pTemplate14}
          filter={selectedFilterFields.includes("supplierScontactnumber")}
          hidden={selectedHideFields?.includes("supplierScontactnumber")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="suppliercountryname"
          header="Supplier Country name (*)"
          body={pTemplate15}
          filter={selectedFilterFields.includes("suppliercountryname")}
          hidden={selectedHideFields?.includes("suppliercountryname")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierstatename"
          header="Supplier State name (*)"
          body={pTemplate16}
          filter={selectedFilterFields.includes("supplierstatename")}
          hidden={selectedHideFields?.includes("supplierstatename")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="suppliercityname"
          header="Supplier City name (*)"
          body={pTemplate17}
          filter={selectedFilterFields.includes("suppliercityname")}
          hidden={selectedHideFields?.includes("suppliercityname")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="supplierpostalzone"
          header="Supplier Postal zone"
          body={p_dateTemplate18}
          filter={selectedFilterFields.includes("supplierpostalzone")}
          hidden={selectedHideFields?.includes("supplierpostalzone")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerSname"
          header="Buyer's name (*)"
          body={pTemplate19}
          filter={selectedFilterFields.includes("buyerSname")}
          hidden={selectedHideFields?.includes("buyerSname")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerStin"
          header="Buyer's TIN"
          body={pTemplate20}
          filter={selectedFilterFields.includes("buyerStin")}
          hidden={selectedHideFields?.includes("buyerStin")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerSsstregistrationnumber"
          header="Buyer's SST Registration Number"
          body={pTemplate21}
          filter={selectedFilterFields.includes("buyerSsstregistrationnumber")}
          hidden={selectedHideFields?.includes("buyerSsstregistrationnumber")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyeridentifiertype"
          header="Buyer Identifier Type"
          body={pTemplate22}
          filter={selectedFilterFields.includes("buyeridentifiertype")}
          hidden={selectedHideFields?.includes("buyeridentifiertype")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="businessregistrationnumberIdentificationnumberPassportnumber"
          header="Business registration number / Identification number / Passport number"
          body={pTemplate23}
          filter={selectedFilterFields.includes(
            "businessregistrationnumberIdentificationnumberPassportnumber",
          )}
          hidden={selectedHideFields?.includes(
            "businessregistrationnumberIdentificationnumberPassportnumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerSeMail"
          header="Buyer's e-mail"
          body={pTemplate24}
          filter={selectedFilterFields.includes("buyerSeMail")}
          hidden={selectedHideFields?.includes("buyerSeMail")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerSaddressCountryname"
          header="Buyer's address (*) (Country name)"
          body={pTemplate25}
          filter={selectedFilterFields.includes("buyerSaddressCountryname")}
          hidden={selectedHideFields?.includes("buyerSaddressCountryname")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerSaddressStatename"
          header="Buyer's address (*) (State name)"
          body={pTemplate26}
          filter={selectedFilterFields.includes("buyerSaddressStatename")}
          hidden={selectedHideFields?.includes("buyerSaddressStatename")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerSaddressCityname"
          header="Buyer's address (City name)"
          body={pTemplate27}
          filter={selectedFilterFields.includes("buyerSaddressCityname")}
          hidden={selectedHideFields?.includes("buyerSaddressCityname")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerSaddressPostalzone"
          header="Buyer's address (Postal zone)"
          body={pTemplate28}
          filter={selectedFilterFields.includes("buyerSaddressPostalzone")}
          hidden={selectedHideFields?.includes("buyerSaddressPostalzone")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="thefirstbuyerScontactnumber"
          header="The first buyer's contact number (*)"
          body={pTemplate29}
          filter={selectedFilterFields.includes("thefirstbuyerScontactnumber")}
          hidden={selectedHideFields?.includes("thefirstbuyerScontactnumber")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="buyerScontactnumber"
          header="Buyer's Contact Number (*)"
          body={pTemplate30}
          filter={selectedFilterFields.includes("buyerScontactnumber")}
          hidden={selectedHideFields?.includes("buyerScontactnumber")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationinvoicecurrency"
          header="Payment information Invoice Currency (*)"
          body={pTemplate31}
          filter={selectedFilterFields.includes(
            "paymentinformationinvoicecurrency",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationinvoicecurrency",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationcurrencyexchangerate"
          header="Payment information Currency Exchange Rate"
          body={p_dateTemplate32}
          filter={selectedFilterFields.includes(
            "paymentinformationcurrencyexchangerate",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationcurrencyexchangerate",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationfrequencyofbilling"
          header="Payment information Frequency of Billing"
          body={pTemplate33}
          filter={selectedFilterFields.includes(
            "paymentinformationfrequencyofbilling",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationfrequencyofbilling",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationbillingperiodstartdate"
          header="Payment information Billing Period Start Date"
          body={pTemplate34}
          filter={selectedFilterFields.includes(
            "paymentinformationbillingperiodstartdate",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationbillingperiodstartdate",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationbillingperiodenddate"
          header="Payment information Billing Period End Date"
          body={pTemplate35}
          filter={selectedFilterFields.includes(
            "paymentinformationbillingperiodenddate",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationbillingperiodenddate",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationpaymentmode"
          header="Payment information Payment Mode"
          body={pTemplate36}
          filter={selectedFilterFields.includes(
            "paymentinformationpaymentmode",
          )}
          hidden={selectedHideFields?.includes("paymentinformationpaymentmode")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationsupplierSbankaccountnumber"
          header="Payment information Supplier's Bank Account Number"
          body={pTemplate37}
          filter={selectedFilterFields.includes(
            "paymentinformationsupplierSbankaccountnumber",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationsupplierSbankaccountnumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationpaymentterms"
          header="Payment information Payment Terms"
          body={pTemplate38}
          filter={selectedFilterFields.includes(
            "paymentinformationpaymentterms",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationpaymentterms",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationprepaymentamount"
          header="Payment information PrePayment Amount"
          body={p_numberTemplate39}
          filter={selectedFilterFields.includes(
            "paymentinformationprepaymentamount",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationprepaymentamount",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationprepaymentdate"
          header="Payment information PrePayment Date"
          body={pTemplate40}
          filter={selectedFilterFields.includes(
            "paymentinformationprepaymentdate",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationprepaymentdate",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="paymentinformationprepaymentreferencenumber"
          header="Payment information PrePayment Reference Number"
          body={pTemplate41}
          filter={selectedFilterFields.includes(
            "paymentinformationprepaymentreferencenumber",
          )}
          hidden={selectedHideFields?.includes(
            "paymentinformationprepaymentreferencenumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="shippingrecipientSname"
          header="Shipping Recipient's Name"
          body={pTemplate42}
          filter={selectedFilterFields.includes("shippingrecipientSname")}
          hidden={selectedHideFields?.includes("shippingrecipientSname")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="shippingrecipientSaddresscountryname"
          header="Shipping Recipient’s Address Country name"
          body={pTemplate43}
          filter={selectedFilterFields.includes(
            "shippingrecipientSaddresscountryname",
          )}
          hidden={selectedHideFields?.includes(
            "shippingrecipientSaddresscountryname",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="shippingrecipientSaddressstatename"
          header="Shipping Recipient’s Address State name"
          body={pTemplate44}
          filter={selectedFilterFields.includes(
            "shippingrecipientSaddressstatename",
          )}
          hidden={selectedHideFields?.includes(
            "shippingrecipientSaddressstatename",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="shippingrecipientSaddresscityname"
          header="Shipping Recipient’s Address City name"
          body={pTemplate45}
          filter={selectedFilterFields.includes(
            "shippingrecipientSaddresscityname",
          )}
          hidden={selectedHideFields?.includes(
            "shippingrecipientSaddresscityname",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="shippingrecipientSaddresspostalzone"
          header="Shipping Recipient’s Address Postal Zone"
          body={pTemplate46}
          filter={selectedFilterFields.includes(
            "shippingrecipientSaddresspostalzone",
          )}
          hidden={selectedHideFields?.includes(
            "shippingrecipientSaddresspostalzone",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="shippingrecipientStin"
          header="Shipping Recipient's TIN"
          body={pTemplate47}
          filter={selectedFilterFields.includes("shippingrecipientStin")}
          hidden={selectedHideFields?.includes("shippingrecipientStin")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="shippingrecipientSidentifiertype"
          header="Shipping Recipient's Identifier type"
          body={pTemplate48}
          filter={selectedFilterFields.includes(
            "shippingrecipientSidentifiertype",
          )}
          hidden={selectedHideFields?.includes(
            "shippingrecipientSidentifiertype",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber"
          header="Shipping Recipient's Information Business registration number/ Identification number / Passport number"
          body={pTemplate49}
          filter={selectedFilterFields.includes(
            "shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber",
          )}
          hidden={selectedHideFields?.includes(
            "shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="otherinformationbillreferencenumber"
          header="Other Information Bill  Reference Number"
          body={pTemplate50}
          filter={selectedFilterFields.includes(
            "otherinformationbillreferencenumber",
          )}
          hidden={selectedHideFields?.includes(
            "otherinformationbillreferencenumber",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="otherinformationreferencenumberofcustomsformno19Etc"
          header="Other Information Reference Number of Customs Form No.1, 9, etc."
          body={pTemplate51}
          filter={selectedFilterFields.includes(
            "otherinformationreferencenumberofcustomsformno19Etc",
          )}
          hidden={selectedHideFields?.includes(
            "otherinformationreferencenumberofcustomsformno19Etc",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="otherinformationincoterms"
          header="Other Information Incoterms"
          body={pTemplate52}
          filter={selectedFilterFields.includes("otherinformationincoterms")}
          hidden={selectedHideFields?.includes("otherinformationincoterms")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="otherinformationfreetradeagreementFtaInformation"
          header="Other Information Free Trade Agreement (FTA) Information"
          body={pTemplate53}
          filter={selectedFilterFields.includes(
            "otherinformationfreetradeagreementFtaInformation",
          )}
          hidden={selectedHideFields?.includes(
            "otherinformationfreetradeagreementFtaInformation",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="otherinformationauthorisationnumberforcertifiedexporter"
          header="Other Information Authorisation Number for Certified Exporter"
          body={pTemplate54}
          filter={selectedFilterFields.includes(
            "otherinformationauthorisationnumberforcertifiedexporter",
          )}
          hidden={selectedHideFields?.includes(
            "otherinformationauthorisationnumberforcertifiedexporter",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="otherinformationreferencenumberofcustomsformno2"
          header="Other Information Reference Number of Customs Form No.2"
          body={pTemplate55}
          filter={selectedFilterFields.includes(
            "otherinformationreferencenumberofcustomsformno2",
          )}
          hidden={selectedHideFields?.includes(
            "otherinformationreferencenumberofcustomsformno2",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelineno"
          header="Invoice Line No"
          body={p_dateTemplate56}
          filter={selectedFilterFields.includes("invoicelineno")}
          hidden={selectedHideFields?.includes("invoicelineno")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelineclassification"
          header="Invoice Line Classification (*)"
          body={pTemplate57}
          filter={selectedFilterFields.includes("invoicelineclassification")}
          hidden={selectedHideFields?.includes("invoicelineclassification")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelineproductname"
          header="Invoice Line Product name (*)"
          body={pTemplate58}
          filter={selectedFilterFields.includes("invoicelineproductname")}
          hidden={selectedHideFields?.includes("invoicelineproductname")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinequantity"
          header="Invoice Line Quantity"
          body={p_dateTemplate59}
          filter={selectedFilterFields.includes("invoicelinequantity")}
          hidden={selectedHideFields?.includes("invoicelinequantity")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelineunitprice"
          header="Invoice Line Unit Price (*)"
          body={pTemplate60}
          filter={selectedFilterFields.includes("invoicelineunitprice")}
          hidden={selectedHideFields?.includes("invoicelineunitprice")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinemeasurement"
          header="Invoice Line Measurement"
          body={pTemplate61}
          filter={selectedFilterFields.includes("invoicelinemeasurement")}
          hidden={selectedHideFields?.includes("invoicelinemeasurement")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinesubtotal"
          header="Invoice Line Subtotal (*)"
          body={pTemplate62}
          filter={selectedFilterFields.includes("invoicelinesubtotal")}
          hidden={selectedHideFields?.includes("invoicelinesubtotal")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinecountryoforigin"
          header="Invoice Line Country of Origin"
          body={pTemplate63}
          filter={selectedFilterFields.includes("invoicelinecountryoforigin")}
          hidden={selectedHideFields?.includes("invoicelinecountryoforigin")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinetotalexcludingtax"
          header="Invoice Line Total Excluding Tax(*)"
          body={pTemplate64}
          filter={selectedFilterFields.includes("invoicelinetotalexcludingtax")}
          hidden={selectedHideFields?.includes("invoicelinetotalexcludingtax")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinetaxtype"
          header="Invoice Line Tax Type (*)"
          body={pTemplate65}
          filter={selectedFilterFields.includes("invoicelinetaxtype")}
          hidden={selectedHideFields?.includes("invoicelinetaxtype")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinetaxrate"
          header="Invoice Line Tax Rate (%)"
          body={pTemplate66}
          filter={selectedFilterFields.includes("invoicelinetaxrate")}
          hidden={selectedHideFields?.includes("invoicelinetaxrate")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinetaxamount"
          header="Invoice Line Tax Amount (*)"
          body={pTemplate67}
          filter={selectedFilterFields.includes("invoicelinetaxamount")}
          hidden={selectedHideFields?.includes("invoicelinetaxamount")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinedetailsoftaxexemption"
          header="Invoice Line Details of Tax Exemption"
          body={pTemplate68}
          filter={selectedFilterFields.includes(
            "invoicelinedetailsoftaxexemption",
          )}
          hidden={selectedHideFields?.includes(
            "invoicelinedetailsoftaxexemption",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinetaxexemptionamountexempted"
          header="Invoice Line Tax Exemption Amount Exempted"
          body={p_dateTemplate69}
          filter={selectedFilterFields.includes(
            "invoicelinetaxexemptionamountexempted",
          )}
          hidden={selectedHideFields?.includes(
            "invoicelinetaxexemptionamountexempted",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinediscountrate"
          header="Invoice Line Discount Rate (%)"
          body={pTemplate70}
          filter={selectedFilterFields.includes("invoicelinediscountrate")}
          hidden={selectedHideFields?.includes("invoicelinediscountrate")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="discountdetailsofamount"
          header="Discount Details of Amount"
          body={p_dateTemplate71}
          filter={selectedFilterFields.includes("discountdetailsofamount")}
          hidden={selectedHideFields?.includes("discountdetailsofamount")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinedetailsofdiscountdescription"
          header="Invoice Line Details of Discount Description"
          body={pTemplate72}
          filter={selectedFilterFields.includes(
            "invoicelinedetailsofdiscountdescription",
          )}
          hidden={selectedHideFields?.includes(
            "invoicelinedetailsofdiscountdescription",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinedetailsofchargefeeChargerate"
          header="Invoice Line Details of Charge Fee/Charge Rate (%)"
          body={pTemplate73}
          filter={selectedFilterFields.includes(
            "invoicelinedetailsofchargefeeChargerate",
          )}
          hidden={selectedHideFields?.includes(
            "invoicelinedetailsofchargefeeChargerate",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicelinedetailsofchargefeeChargeamount"
          header="Invoice Line Details of Charge Fee/Charge Amount"
          body={pTemplate74}
          filter={selectedFilterFields.includes(
            "invoicelinedetailsofchargefeeChargeamount",
          )}
          hidden={selectedHideFields?.includes(
            "invoicelinedetailsofchargefeeChargeamount",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="detailsoftaxtaxtype"
          header="Details of tax Tax Type (*)"
          body={pTemplate75}
          filter={selectedFilterFields.includes("detailsoftaxtaxtype")}
          hidden={selectedHideFields?.includes("detailsoftaxtaxtype")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="detailsoftaxtotaltaxableamountpertaxtype"
          header="Details of tax Total Taxable Amount per Tax Type"
          body={p_dateTemplate76}
          filter={selectedFilterFields.includes(
            "detailsoftaxtotaltaxableamountpertaxtype",
          )}
          hidden={selectedHideFields?.includes(
            "detailsoftaxtotaltaxableamountpertaxtype",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="detailsoftaxtotaltaxamountpertaxtype"
          header="Details of tax Total Tax Amount Per Tax Type (*)"
          body={pTemplate77}
          filter={selectedFilterFields.includes(
            "detailsoftaxtotaltaxamountpertaxtype",
          )}
          hidden={selectedHideFields?.includes(
            "detailsoftaxtotaltaxamountpertaxtype",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="taxexemptiondetailsoftaxexemption"
          header="Tax exemption Details of Tax Exemption"
          body={pTemplate78}
          filter={selectedFilterFields.includes(
            "taxexemptiondetailsoftaxexemption",
          )}
          hidden={selectedHideFields?.includes(
            "taxexemptiondetailsoftaxexemption",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="taxexemptionamountexemptedfromtax"
          header="Tax exemption Amount Exempted from Tax"
          body={p_dateTemplate79}
          filter={selectedFilterFields.includes(
            "taxexemptionamountexemptedfromtax",
          )}
          hidden={selectedHideFields?.includes(
            "taxexemptionamountexemptedfromtax",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="discountadditionaldiscountamount"
          header="Discount Additional Discount Amount"
          body={p_dateTemplate80}
          filter={selectedFilterFields.includes(
            "discountadditionaldiscountamount",
          )}
          hidden={selectedHideFields?.includes(
            "discountadditionaldiscountamount",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="discountadditionaldescription"
          header="Discount Additional Description"
          body={p_dateTemplate81}
          filter={selectedFilterFields.includes(
            "discountadditionaldescription",
          )}
          hidden={selectedHideFields?.includes("discountadditionaldescription")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="feeamountadditionalfeeamount"
          header="Fee Amount Additional Fee Amount"
          body={p_dateTemplate82}
          filter={selectedFilterFields.includes("feeamountadditionalfeeamount")}
          hidden={selectedHideFields?.includes("feeamountadditionalfeeamount")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="feeamountadditionaldescription"
          header="Fee Amount Additional Description"
          body={p_dateTemplate83}
          filter={selectedFilterFields.includes(
            "feeamountadditionaldescription",
          )}
          hidden={selectedHideFields?.includes(
            "feeamountadditionaldescription",
          )}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="totaldiscountvalue"
          header="Total Discount Value"
          body={p_dateTemplate84}
          filter={selectedFilterFields.includes("totaldiscountvalue")}
          hidden={selectedHideFields?.includes("totaldiscountvalue")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="totalfeeChargeamount"
          header="Total Fee/Charge Amount"
          body={pTemplate85}
          filter={selectedFilterFields.includes("totalfeeChargeamount")}
          hidden={selectedHideFields?.includes("totalfeeChargeamount")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="totaltaxamount"
          header="Total Tax Amount (*)"
          body={pTemplate86}
          filter={selectedFilterFields.includes("totaltaxamount")}
          hidden={selectedHideFields?.includes("totaltaxamount")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="totalexcludingtax"
          header="Total Excluding Tax (*)"
          body={pTemplate87}
          filter={selectedFilterFields.includes("totalexcludingtax")}
          hidden={selectedHideFields?.includes("totalexcludingtax")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="totalnetamount"
          header="Total Net Amount"
          body={p_dateTemplate88}
          filter={selectedFilterFields.includes("totalnetamount")}
          hidden={selectedHideFields?.includes("totalnetamount")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="totalincludingtax"
          header="Total Including Tax (*)"
          body={pTemplate89}
          filter={selectedFilterFields.includes("totalincludingtax")}
          hidden={selectedHideFields?.includes("totalincludingtax")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="roundingamount"
          header="Rounding Amount"
          body={p_dateTemplate90}
          filter={selectedFilterFields.includes("roundingamount")}
          hidden={selectedHideFields?.includes("roundingamount")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="totalpayableamount"
          header="Total Payable Amount (*)"
          body={pTemplate91}
          filter={selectedFilterFields.includes("totalpayableamount")}
          hidden={selectedHideFields?.includes("totalpayableamount")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="invoicenumber"
          header="Invoice Number"
          body={pTemplate92}
          filter={selectedFilterFields.includes("invoicenumber")}
          hidden={selectedHideFields?.includes("invoicenumber")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column
          field="consolidated"
          header="Original e-Invoice Reference Number"
          body={pTemplate93}
          filter={selectedFilterFields.includes("consolidated")}
          hidden={selectedHideFields?.includes("consolidated")}
          sortable
          style={{ minWidth: "8rem" }}
        />
        <Column header="Edit" body={editTemplate} />
        <Column header="Delete" body={deleteTemplate} />
      </DataTable>
      <Dialog
        header="Upload Invoice Data"
        visible={showUpload}
        onHide={() => setShowUpload(false)}
      >
        <UploadService
          user={user}
          serviceName="invoice"
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}
        />
      </Dialog>

      <Dialog
        header="Search Invoice"
        visible={searchDialog}
        onHide={() => setSearchDialog(false)}
      >
        Search
      </Dialog>
      <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false);
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false);
          }}
        ></Button>
      </Dialog>
    </>
  );
};

export default InvoiceDataTable;
