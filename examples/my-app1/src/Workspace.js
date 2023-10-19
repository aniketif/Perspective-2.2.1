/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import * as React from "react";

import * as perspective from "@finos/perspective";

import chroma from "chroma-js";
import "@finos/perspective-workspace";
import "@finos/perspective-viewer";
import "@finos/perspective-viewer-datagrid";
import "@finos/perspective-viewer-d3fc";

//
// import "./index.css";
// import "./material-dark.css";
import default_config from "./config_layout.json";


//import "./custom_heatmap";
//import "./custom_datagrid";

window.chroma = chroma;

// Required because perspective-workspace doesn't export type declarations
// declare global {
//     namespace JSX {
//         interface IntrinsicElements {
//             "perspective-workspace": React.DetailedHTMLProps<
//             React.HTMLAttributes<HTMLElement>,
//             HTMLElement
//             >;
//         }
//     }
// }
const worker = perspective.default.shared_worker();

const getTable = async (tablename) => {
    /*const req = fetch("https://cdn.jsdelivr.net/npm/superstore-arrow/superstore.arrow");
    const resp = await req;
    const buffer = await resp.arrayBuffer();

    return await worker.table(buffer as any);*
   /* const data = {
        Sales: [500, 1000, 1500],
        Profit: [100.25, 200.5, 300.75],
      };*/






    // const  data = []

        const data =
            [
        {
            "Name": "",
            "tdate": "2023-02-01",
            "Address": "1663146400",
            "iaccountid": 830,
            "Last Update": "2023-04-10 20:53:03.741+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 31.0,
            "dormantDays.payer": 1,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 57750.0,
            "maxValue.p45d.payer": 600000.00,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 600000.0,
            "totalValue.p7d.payee": 0.0,
            "totalValue.p7d.payer": 612000.0,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 1,
            "Last Trans Date_Payer": "2023-01-31",
            "totalCount.p30d.payee": 0,
            "totalCount.p30d.payer": 3,
            "totalValue.p15d.payee": 0.0,
            "totalValue.p15d.payer": 612000.0,
            "totalValue.p30d.payee": 0.0,
            "totalValue.p30d.payer": 612000.0,
            "totalValue.p90d.payee": 0.0,
            "totalValue.p90d.payer": 693000.0,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 958011.0,
            "Days In The System_Payer": 98,
            "Distinct Payer_P30_Payee": 1,
            "Disctinct Payee_P30_Payer": 0,
            "location.p30d.countries.US": 3,
            "relationships.p30d.payee.38706": 612000.00
        },
        {
            "Name": "",
            "tdate": "2023-02-05",
            "Address": "+91-1663146400",
            "iaccountid": 830,
            "Last Update": "2023-04-10 21:04:40.343+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 32.0,
            "dormantDays.payer": 0,
            "maxValue.p1d.payer": 6000.00,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 73222.22,
            "maxValue.p45d.payer": 600000.00,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 600000.0,
            "totalValue.p7d.payee": 0.0,
            "totalValue.p7d.payer": 618000.0,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 2,
            "Last Trans Date_Payer": "2023-02-05",
            "totalCount.p30d.payee": 0,
            "totalCount.p30d.payer": 4,
            "totalValue.p15d.payee": 0.0,
            "totalValue.p15d.payer": 618000.0,
            "totalValue.p30d.payee": 0.0,
            "totalValue.p30d.payer": 618000.0,
            "totalValue.p90d.payee": 0.0,
            "totalValue.p90d.payer": 659000.0,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 964011.0,
            "Days In The System_Payer": 102,
            "Distinct Payer_P30_Payee": 1,
            "Disctinct Payee_P30_Payer": 0,
            "location.p30d.countries.US": 4,
            "relationships.p30d.payee.38706": 618000.00
        },
        {
            "Name": "",
            "tdate": "2023-02-07",
            "Address": "1663146400",
            "iaccountid": 830,
            "Last Update": "2023-04-10 21:07:47.216+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 33.0,
            "dormantDays.payer": 0,
            "maxValue.p1d.payer": 6000.00,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 124800.0,
            "maxValue.p45d.payer": 600000.00,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 600000.0,
            "totalValue.p7d.payee": 0.0,
            "totalValue.p7d.payer": 624000.0,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 3,
            "Last Trans Date_Payer": "2023-02-07",
            "totalCount.p30d.payee": 0,
            "totalCount.p30d.payer": 5,
            "totalValue.p15d.payee": 0.0,
            "totalValue.p15d.payer": 624000.0,
            "totalValue.p30d.payee": 0.0,
            "totalValue.p30d.payer": 624000.0,
            "totalValue.p90d.payee": 0.0,
            "totalValue.p90d.payer": 624000.0,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 970011.0,
            "Days In The System_Payer": 104,
            "Distinct Payer_P30_Payee": 1,
            "Disctinct Payee_P30_Payer": 0,
            "location.p30d.countries.US": 5,
            "relationships.p30d.payee.38706": 624000.00
        },
        {
            "Name": "",
            "tdate": "2023-04-22",
            "Address": "1663146400",
            "iaccountid": 830,
            "Last Update": "2023-05-23 22:15:13.547+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 47.0,
            "dormantDays.payer": 1,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 42789.47,
            "maxValue.p45d.payer": 100000.00,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 600000.0,
            "totalValue.p7d.payee": 0.0,
            "totalValue.p7d.payer": 189000.0,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 2,
            "Last Trans Date_Payer": "2023-04-21",
            "totalCount.p30d.payee": 0,
            "totalCount.p30d.payer": 14,
            "totalValue.p15d.payee": 0.0,
            "totalValue.p15d.payer": 189000.0,
            "totalValue.p30d.payee": 0.0,
            "totalValue.p30d.payer": 189000.0,
            "totalValue.p90d.payee": 0.0,
            "totalValue.p90d.payer": 813000.0,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 1159011.0,
            "Days In The System_Payer": 178,
            "Distinct Payer_P30_Payee": 10,
            "Disctinct Payee_P30_Payer": 0,
            "txnScoreCount.p30d.payer.70": 6,
            "txnScoreCount.p60d.payer.70": 6,
            "relationships.p30d.payee.55138": 9000.00,
            "relationships.p30d.payee.84086": 2000.00,
            "relationships.p30d.payee.91201": 2000.00,
            "relationships.p30d.payee.91274": 2000.00,
            "relationships.p30d.payee.91276": 9000.00,
            "relationships.p30d.payee.91277": 2000.00,
            "relationships.p30d.payee.91279": 9000.00,
            "relationships.p30d.payee.91280": 2000.00,
            "relationships.p30d.payee.91281": 2000.00,
            "relationships.p30d.payee.91600": 150000.00,
            "rulesTriggeredCount.p30d.payer.1805": 4,
            "rulesTriggeredCount.p30d.payer.1905": 2,
            "rulesTriggeredCount.p30d.payer.1912": 4,
            "rulesTriggeredCount.p30d.payer.2005": 2
        },
        {
            "Name": "",
            "tdate": "2023-04-27",
            "Address": "1663146400",
            "iaccountid": 830,
            "Last Update": "2023-05-23 22:37:09.192+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 48.0,
            "dormantDays.payer": 0,
            "maxValue.p1d.payer": 50001.00,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 43150.05,
            "maxValue.p45d.payer": 100000.00,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 600000.0,
            "totalValue.p7d.payee": 0.0,
            "totalValue.p7d.payer": 200001.0,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 3,
            "Last Trans Date_Payer": "2023-04-27",
            "totalCount.p30d.payee": 0,
            "totalCount.p30d.payer": 15,
            "totalValue.p15d.payee": 0.0,
            "totalValue.p15d.payer": 239001.0,
            "totalValue.p30d.payee": 0.0,
            "totalValue.p30d.payer": 239001.0,
            "totalValue.p90d.payee": 0.0,
            "totalValue.p90d.payer": 863001.0,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 1209012.0,
            "Days In The System_Payer": 183,
            "Distinct Payer_P30_Payee": 10,
            "Disctinct Payee_P30_Payer": 0,
            "txnScoreCount.p30d.payer.70": 7,
            "txnScoreCount.p60d.payer.70": 7,
            "relationships.p30d.payee.55138": 9000.00,
            "relationships.p30d.payee.84086": 2000.00,
            "relationships.p30d.payee.91201": 2000.00,
            "relationships.p30d.payee.91274": 2000.00,
            "relationships.p30d.payee.91276": 9000.00,
            "relationships.p30d.payee.91277": 2000.00,
            "relationships.p30d.payee.91279": 9000.00,
            "relationships.p30d.payee.91280": 2000.00,
            "relationships.p30d.payee.91281": 2000.00,
            "relationships.p30d.payee.91600": 200001.00,
            "totalCount.p7d.byClass.payer.CARD": 1,
            "totalValue.p7d.byClass.payer.CARD": 50001.00,
            "rulesTriggeredCount.p30d.payer.1805": 4,
            "rulesTriggeredCount.p30d.payer.1905": 2,
            "rulesTriggeredCount.p30d.payer.1912": 4,
            "rulesTriggeredCount.p30d.payer.1918": 1,
            "rulesTriggeredCount.p30d.payer.2005": 2,
            "totalCount.p7d.byProvenance.payer.ECOMM": 1,
            "totalValue.p7d.byProvenance.payer.ECOMM": 50001.00
        },
        {
            "Name": "",
            "tdate": "2023-07-05",
            "Address": "1663146400",
            "iaccountid": 830,
            "Last Update": "2023-07-30 22:18:45.08+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 82.0,
            "distinctMCC.p180d": [
                5055,
                4131,
                8099,
                4132,
                4112,
                5311
            ],
            "dormantDays.payer": 0,
            "maxValue.p5d.payer": 9000000.00,
            "avgCount.p30d.payee": 1.13,
            "avgValue.p30d.payee": 1061206.411765,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 741224.88,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 9000000.0,
            "totalCount.p5d.payer": 34,
            "totalValue.p5d.payer": 36081018.00,
            "totalValue.p7d.payer": 36081018.00,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 1,
            "Last Trans Date_Payer": "2023-07-05",
            "totalCount.p10d.payer": 34,
            "totalCount.p28d.payer": 34,
            "totalCount.p30d.payer": 34,
            "totalValue.p10d.payer": 36081018.00,
            "totalValue.p15d.payer": 36081018.00,
            "totalValue.p30d.payer": 36081018.00,
            "totalValue.p36d.payer": 36081018.00,
            "totalValue.p90d.payer": 36320019.00,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 37290030,
            "Days In The System_Payer": 252,
            "Distinct Payer_P30_Payee": 3,
            "Disctinct Payee_P30_Payer": 0,
            "location.p30d.countries.CA": 10,
            "location.p30d.countries.IN": 4,
            "location.p30d.countries.CAN": 10,
            "location.p30d.countries.USA": 10,
            "txnScoreCount.p30d.payer.20": 2,
            "txnScoreCount.p30d.payer.50": 9,
            "txnScoreCount.p60d.payer.20": 2,
            "txnScoreCount.p60d.payer.50": 9,
            "totalCount.p7d.above100.payer": 31,
            "relationships.p30d.payee.105909": 81018.00,
            "relationships.p30d.payee.106631": 18000000.00,
            "relationships.p30d.payee.106632": 18000000.00,
            "rulesTriggeredCount.p30d.payer.414": 2,
            "rulesTriggeredCount.p30d.payer.416": 6,
            "rulesTriggeredCount.p30d.payer.417": 1,
            "rulesTriggeredCount.p30d.payer.427": 2,
            "rulesTriggeredCount.p30d.payer.1333": 2,
            "totalCount.p7d.byClass.payer.491866": 34,
            "totalValue.p7d.byClass.payer.491866": 36081018.00
        },
        {
            "Name": "",
            "tdate": "2023-07-06",
            "Address": "1663146400",
            "iaccountid": 830,
            "Last Update": "2023-07-31 15:50:59.087+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 278.0,
            "distinctMCC.p180d": [
                5055,
                4131,
                8099,
                4132,
                4112,
                5311,
                5647
            ],
            "dormantDays.payer": 0,
            "maxValue.p5d.payer": 9000000.00,
            "avgCount.p30d.payee": 7.67,
            "avgValue.p30d.payee": 161947.913043,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 153008.25,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 9000000.0,
            "totalCount.p5d.payer": 230,
            "totalValue.p5d.payer": 37248020.00,
            "totalValue.p7d.payer": 37248020.00,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 2,
            "Last Trans Date_Payer": "2023-07-06",
            "totalCount.p10d.payer": 230,
            "totalCount.p28d.payer": 230,
            "totalCount.p30d.payer": 230,
            "totalValue.p10d.payer": 37248020.00,
            "totalValue.p15d.payer": 37248020.00,
            "totalValue.p30d.payer": 37248020.00,
            "totalValue.p36d.payer": 37248020.00,
            "totalValue.p90d.payer": 37487021.00,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 38457032,
            "Days In The System_Payer": 253,
            "Distinct Payer_P30_Payee": 4,
            "Disctinct Payee_P30_Payer": 0,
            "location.p30d.countries.CA": 11,
            "location.p30d.countries.HK": 32,
            "location.p30d.countries.IN": 4,
            "location.p30d.countries.MY": 32,
            "location.p30d.countries.NG": 32,
            "location.p30d.countries.TH": 33,
            "location.p30d.countries.TW": 32,
            "location.p30d.countries.VN": 32,
            "location.p30d.countries.CAN": 11,
            "location.p30d.countries.USA": 11,
            "txnScoreCount.p30d.payer.20": 189,
            "txnScoreCount.p30d.payer.50": 10,
            "txnScoreCount.p60d.payer.20": 189,
            "txnScoreCount.p60d.payer.50": 10,
            "totalCount.p7d.above100.payer": 227,
            "relationships.p30d.payee.105909": 90020.00,
            "relationships.p30d.payee.105983": 1158000.00,
            "relationships.p30d.payee.106631": 18000000.00,
            "relationships.p30d.payee.106632": 18000000.00,
            "rulesTriggeredCount.p30d.payer.414": 2,
            "rulesTriggeredCount.p30d.payer.416": 6,
            "rulesTriggeredCount.p30d.payer.417": 2,
            "rulesTriggeredCount.p30d.payer.422": 158,
            "rulesTriggeredCount.p30d.payer.423": 118,
            "rulesTriggeredCount.p30d.payer.424": 61,
            "rulesTriggeredCount.p30d.payer.425": 187,
            "rulesTriggeredCount.p30d.payer.427": 2,
            "rulesTriggeredCount.p30d.payer.1333": 2,
            "totalCount.p7d.byClass.payer.491866": 230,
            "totalValue.p7d.byClass.payer.491866": 37248020.00
        },
        {
            "Name": "",
            "tdate": "2023-07-09",
            "Address": "1663146400",
            "iaccountid": 830,
            "Last Update": "2023-08-01 13:07:46.325+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 281.0,
            "distinctMCC.p180d": [
                5055,
                4131,
                8099,
                4132,
                4112,
                5311,
                5647
            ],
            "dormantDays.payer": 0,
            "maxValue.p5d.payer": 9000000.00,
            "avgCount.p30d.payee": 7.77,
            "avgValue.p30d.payee": 159888.497854,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 151181.54,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 9000000.0,
            "totalCount.p5d.payer": 233,
            "totalValue.p5d.payer": 37254020.00,
            "totalValue.p7d.payer": 37254020.00,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 3,
            "Last Trans Date_Payer": "2023-07-09",
            "totalCount.p10d.payer": 233,
            "totalCount.p28d.payer": 233,
            "totalCount.p30d.payer": 233,
            "totalValue.p10d.payer": 37254020.00,
            "totalValue.p15d.payer": 37254020.00,
            "totalValue.p30d.payer": 37254020.00,
            "totalValue.p36d.payer": 37254020.00,
            "totalValue.p90d.payer": 37493021.00,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 38463032,
            "Days In The System_Payer": 256,
            "Distinct Payer_P30_Payee": 5,
            "Disctinct Payee_P30_Payer": 0,
            "location.p30d.countries.CA": 11,
            "location.p30d.countries.HK": 32,
            "location.p30d.countries.IN": 4,
            "location.p30d.countries.MY": 32,
            "location.p30d.countries.NG": 32,
            "location.p30d.countries.TH": 33,
            "location.p30d.countries.TW": 32,
            "location.p30d.countries.US": 3,
            "location.p30d.countries.VN": 32,
            "location.p30d.countries.CAN": 11,
            "location.p30d.countries.USA": 11,
            "txnScoreCount.p30d.payer.20": 189,
            "txnScoreCount.p30d.payer.50": 11,
            "txnScoreCount.p60d.payer.20": 189,
            "txnScoreCount.p60d.payer.50": 11,
            "totalCount.p7d.above100.payer": 230,
            "relationships.p30d.payee.30447": 6000.00,
            "relationships.p30d.payee.105909": 90020.00,
            "relationships.p30d.payee.105983": 1158000.00,
            "relationships.p30d.payee.106631": 18000000.00,
            "relationships.p30d.payee.106632": 18000000.00,
            "rulesTriggeredCount.p30d.payer.410": 1,
            "rulesTriggeredCount.p30d.payer.414": 2,
            "rulesTriggeredCount.p30d.payer.416": 6,
            "rulesTriggeredCount.p30d.payer.417": 2,
            "rulesTriggeredCount.p30d.payer.422": 158,
            "rulesTriggeredCount.p30d.payer.423": 118,
            "rulesTriggeredCount.p30d.payer.424": 61,
            "rulesTriggeredCount.p30d.payer.425": 187,
            "rulesTriggeredCount.p30d.payer.427": 2,
            "rulesTriggeredCount.p30d.payer.1333": 2,
            "totalCount.p7d.byClass.payer.491866": 233,
            "totalValue.p7d.byClass.payer.491866": 37254020.00
        },
        {
            "Name": "",
            "tdate": "2023-07-12",
            "Address": "1663146400",
            "iaccountid": 830,
            "Last Update": "2023-08-01 14:08:36.448+05:30",
            "Total Count_Payee": 0.0,
            "Total Count_Payer": 289.0,
            "distinctMCC.p180d": [
                5055,
                4131,
                5947,
                8099,
                4132,
                4112,
                5311,
                5647
            ],
            "dormantDays.payer": 0,
            "maxValue.p5d.payer": 2500.00,
            "avgCount.p30d.payee": 8.03,
            "avgValue.p30d.payee": 154580.995851,
            "avgValue.p90d.payee": 0.0,
            "avgValue.p90d.payer": 146457.11,
            "maxValue.p90d.payee": 0.0,
            "maxValue.p90d.payer": 9000000.0,
            "totalCount.p5d.payer": 11,
            "totalValue.p5d.payer": 6000.00,
            "totalValue.p7d.payer": 1173002.00,
            "Active Days_P30_Payee": 0,
            "Active Days_P30_Payer": 4,
            "Last Trans Date_Payer": "2023-07-12",
            "totalCount.p10d.payer": 241,
            "totalCount.p28d.payer": 241,
            "totalCount.p30d.payer": 241,
            "totalValue.p10d.payer": 37254020.00,
            "totalValue.p15d.payer": 37254020.00,
            "totalValue.p30d.payer": 37254020.00,
            "totalValue.p36d.payer": 37254020.00,
            "totalValue.p90d.payer": 37493021.00,
            "First Trans Date_Payer": "2022-10-26",
            "Total Value_PAll_Payee": 0.0,
            "Total Value_PAll_Payer": 38463032,
            "Days In The System_Payer": 259,
            "Distinct Payer_P30_Payee": 5,
            "Disctinct Payee_P30_Payer": 0,
            "location.p30d.countries.CA": 11,
            "location.p30d.countries.HK": 32,
            "location.p30d.countries.IN": 6,
            "location.p30d.countries.MY": 32,
            "location.p30d.countries.NG": 32,
            "location.p30d.countries.TH": 33,
            "location.p30d.countries.TW": 32,
            "location.p30d.countries.UK": 6,
            "location.p30d.countries.US": 3,
            "location.p30d.countries.VN": 32,
            "location.p30d.countries.CAN": 11,
            "location.p30d.countries.USA": 11,
            "txnScoreCount.p30d.payer.20": 189,
            "txnScoreCount.p30d.payer.50": 17,
            "txnScoreCount.p60d.payer.20": 189,
            "txnScoreCount.p60d.payer.50": 17,
            "totalCount.p7d.above100.payer": 3,
            "relationships.p30d.payee.30447": 6000.00,
            "relationships.p30d.payee.105909": 90020.00,
            "relationships.p30d.payee.105983": 1158000.00,
            "relationships.p30d.payee.106631": 18000000.00,
            "relationships.p30d.payee.106632": 18000000.00,
            "rulesTriggeredCount.p30d.payer.410": 1,
            "rulesTriggeredCount.p30d.payer.414": 2,
            "rulesTriggeredCount.p30d.payer.416": 6,
            "rulesTriggeredCount.p30d.payer.417": 2,
            "rulesTriggeredCount.p30d.payer.422": 158,
            "rulesTriggeredCount.p30d.payer.423": 118,
            "rulesTriggeredCount.p30d.payer.424": 61,
            "rulesTriggeredCount.p30d.payer.425": 187,
            "rulesTriggeredCount.p30d.payer.427": 2,
            "rulesTriggeredCount.p30d.payer.438": 6,
            "rulesTriggeredCount.p30d.payer.1333": 2,
            "totalCount.p7d.byClass.payer.491866": 207,
            "totalValue.p7d.byClass.payer.491866": 1173002.00
        }
    ]

    //
    // // Collect all keys from input JSON
    // const allKeys = inputjson.reduce((keys, item) => {
    //     Object.keys(item).forEach(key => {
    //         if (!keys.includes(key)) {
    //             keys.push(key);
    //         }
    //     });
    //     return keys;
    // }, []);

// Create output objects with all keys having null values
//     inputjson.forEach(item => {
//         const newItem = {};
//         allKeys.forEach(key => {
//             newItem[key] = null;
//         });
//         for (const key in item) {
//             newItem[key] = item[key];
//         }
//         data.push(newItem);
//     });
//


    if (tablename==='tod'){
        const  data1 = {

            Count: [0,2,2,3,2,1],
            Slot: [4,8,12,16,20,24]


        }
        return worker.table(data1)
    } else if (tablename==='dow')
    { const data2 = {
        Type: ["Holiday","Weekday","Weekend"],
        Count:[0,7,3]
    }
        return worker.table(data2)    }
    // let schema={
    //     "Name": "string",
    //     "tdate": "datetime",
    //     "Address": "string"
    // }
    // let table = await worker.table(schema)
    // table.update(data)
    // return table;

    return worker.table(data)



};


const Workspace = () => {
    const workspace = React.useRef(null);

    React.useEffect( () => {


        if (workspace.current) {
            // Restore a saved config or default
            /*let config = window.localStorage.getItem(
                "drona_dashboard_config"
            );

            const layout = config ? JSON.parse(config) : default_config;*/
            const layout = default_config;

            (async function () {
                await workspace.current.restore(layout);
                await workspace.current.flush();



            })();

            //workspace.current.addTable("superstore", getTable());



            workspace.current.addTable("superstore", getTable('livetrans'))
            workspace.current.addTable("tod", getTable('tod'))
            workspace.current.addTable("dow", getTable('dow'))
            const progress = document.getElementById("progress");
            progress?.setAttribute("style", "display:none;");

            workspace.current.addEventListener(
                "workspace-layout-update",
                async () => {
                    const config = await workspace.current.save();
                    // console.debug("Saving to localStorage:", config);
                    window.localStorage.setItem(
                        "drona_dashboard_config",
                        JSON.stringify(config)
                    );
                }
            );
        }
    });

    return <perspective-workspace ref={workspace}></perspective-workspace>;
};



export {Workspace}

// const App = () => {
//     return (
//         <div id="main" className="container">
//             <Workspace />
//             <Footer />
//         </div>
//     );
// };
//
// window.addEventListener("load", () => {
//     ReactDOM.render(<App />, document.getElementById("root"));
// });
