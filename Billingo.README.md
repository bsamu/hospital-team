https://app.billingo.hu/dashboard
API_KEY_v3="f53c7090-c0aa-11ec-9c9f-0adb4fd9a356"

**1. Create product**
Address: https://api.billingo.hu/v3/products
Body:
{
  "name": "Mask",
  "comment": "FFP2/KN95",
  "currency": "HUF",
  "vat": "27%",
  "net_unit_price": 500,
  "unit": "db",
  "general_ledger_number": "string",
  "general_ledger_taxcode": "string",
  "entitlement": "AAM"
}
## --> Product created: "id": 10121398

**2. Bank account**
Address: 'https://api.billingo.hu/v3/bank-accounts'
--> Created: {
      "id": 121656,
      "name": "Training Bank Zrt.",
      "account_number": "12345678-87654321-00000000",
      "account_number_iban": "",
      "swift": "",
      "currency": "HUF",
      "need_qr": false
    }
## --> bank account created: "id": 121656

**3. Create a partner**
Address: POST /partners
Requested format:
{
  "name": "string",
  "address": {
    "country_code": "",
    "post_code": "string",
    "city": "string",
    "address": "string"
  },
  "emails": [
    "string"
  ],
  "taxcode": "string",
  "iban": "string",
  "swift": "string",
  "account_number": "string",
  "phone": "string",
  "general_ledger_number": "string",
  "tax_type": "",
  "custom_billing_settings": {
    "payment_method": "aruhitel",
    "document_form": "electronic",
    "due_days": 0,
    "document_currency": "AED",
    "template_language_code": "de",
    "discount": {
      "type": "percent",
      "value": 0
    }
  },
  "group_member_tax_number": "string"
}
## --> to get partner ID
## --> block_ID (számla): "id": 146443

**4. To post a document**
Address: POST /documents
Requested format:
{
  ### "vendor_id": "string",
  ### "partner_id": 0, 
  ### "block_id": 0,
  ### "bank_account_id": 0, 
  "type": "advance",
  "fulfillment_date": "2022-04-20",
  "due_date": "2022-04-20",
  "payment_method": "aruhitel",
  "language": "de",
  "currency": "AED",
  "conversion_rate": 1,
  "electronic": false,
  "paid": false,
  "items": [
    {
      ### "product_id": 0,
      "quantity": 0,
      "comment": "string"
    },
    {
      "name": "string",
      "unit_price": 0,
      "unit_price_type": "gross",
      "quantity": 0,
      "unit": "string",
      "vat": "0%",
      "comment": "string",
      "entitlement": "AAM"
    }
  ],
  "comment": "string",
  "settings": {
    "mediated_service": false,
    "without_financial_fulfillment": false,
    "online_payment": "",
    "round": "five",
    "no_send_onlineszamla_by_user": true,
    "order_number": "string",
    "place_id": 0,
    "instant_payment": true,
    "selected_type": "advance"
  },
  "advance_invoice": [
    0
  ],
  "discount": {
    "type": "percent",
    "value": 0
  },
  "instant_payment": true
}

## --> returns a document object with all information + id