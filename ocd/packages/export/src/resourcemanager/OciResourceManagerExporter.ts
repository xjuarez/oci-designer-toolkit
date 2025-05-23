/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OciExporter } from '../terraform/OciExporter.js'

export class OciResourceManagerExporter extends OciExporter {
    ociRegionProviderString = (useConfig: boolean = false) => {return ``}
    ociHomeRegionProviderString = (useConfig: boolean = false) => {return `
# ------ Configure the OCI Home Region Provider
provider "oci" {
    alias            = "home_region"
    region           = local.home_region
}
    `}
    ociProviderTFVars = (useConfig: boolean = false) => {return `${this.autoGeneratedNotice()}`}
}
