import { AtendeSimples } from "./companies/atendesimples"
import { PrefPalmas } from "./companies/pref-palmas"
import { ConsisTI } from "./companies/consisti"
import { TelTelematica } from "./companies/tel-telematica"
import { LifeSites } from "./companies/life-sites"
import { Disko } from "./companies/disko"

export const Jobs = {
  title: "Experience",
  records: [
    ...AtendeSimples,
    ...PrefPalmas,
    ...ConsisTI,
    // ...TelTelematica,
    // ...LifeSites,
    // ...Disko
  ]
}