/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdValidatorGenerator } from './OcdValidatorGenerator.js'
import { commonElements, commonIgnoreElements } from './data/GoogleCommonResourceProperties.js'

export class GoogleValidatorGenerator extends OcdValidatorGenerator {
    constructor () {
        super('Google')
        this.ignoreAttributes = [...commonElements, ...commonIgnoreElements]
    }
}

export default GoogleValidatorGenerator
// module.exports = { GoogleValidatorGenerator }
