namespace ust.saikumar.erothu.db;

using { Currency,cuid} from '@sap/cds/common';
using { ust.saikumar.erothu.resuse as common } from '../db/common';

entity employee : cuid {
    nameFirst       : String(40);
    nameMiddle      : String(40);
    nameLast        : String(40);
    nameInitials    : String(40);
    gender          : common.gender;
    language        : String(1);
    phoneNumber     : common.phoneNumber;
    email           : common.email;
    loginName       : String(12);
    currency        : Currency;
    salaryAmount    : Decimal(10,2);
    accountNumber   : String(16);
    bankId          : String(20);
    bankName        : String(64);
}
