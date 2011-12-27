/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement a routine that prints all the permutations of a given string.
 * Assume that all of the charactes of the string are unique.
 * Example:
 * given 'abc', your routine shall produce 'abc' 'acb' 'bac' 'bca' 'cab' 'cba'.
 */

/*____________________________________________________________________________*/

function permute(str) {
    var len = str.length;
    var used = [];
    var output = [];
    var input = str.split('');

    doPermute(input, output, used, len, 0);
}

function doPermute(input, output, used, len, level) {
    //console.log('in do permute: '+ level);

    if (level === len) {
        console.log( '"'+output.join('')+'"' );
        return;
    }

    var i = 0;

    for (i = 0; i < len; i++) {
        if (!used[i]) {
            output.push(input[i]);

            used[i] = true;

            doPermute(input, output, used, len, level+1);

            used[i] = false;

            output.length = output.length - 1;
        }
    }
}

/*____________________________________________________________________________*/

permute('SF_CA');

/*
Output: ($ /usr/bin/node 006.js)
"SF_CA"
"SF_AC"
"SFC_A"
"SFCA_"
"SFA_C"
"SFAC_"
"S_FCA"
"S_FAC"
"S_CFA"
"S_CAF"
"S_AFC"
"S_ACF"
"SCF_A"
"SCFA_"
"SC_FA"
"SC_AF"
"SCAF_"
"SCA_F"
"SAF_C"
"SAFC_"
"SA_FC"
"SA_CF"
"SACF_"
"SAC_F"
"FS_CA"
"FS_AC"
"FSC_A"
"FSCA_"
"FSA_C"
"FSAC_"
"F_SCA"
"F_SAC"
"F_CSA"
"F_CAS"
"F_ASC"
"F_ACS"
"FCS_A"
"FCSA_"
"FC_SA"
"FC_AS"
"FCAS_"
"FCA_S"
"FAS_C"
"FASC_"
"FA_SC"
"FA_CS"
"FACS_"
"FAC_S"
"_SFCA"
"_SFAC"
"_SCFA"
"_SCAF"
"_SAFC"
"_SACF"
"_FSCA"
"_FSAC"
"_FCSA"
"_FCAS"
"_FASC"
"_FACS"
"_CSFA"
"_CSAF"
"_CFSA"
"_CFAS"
"_CASF"
"_CAFS"
"_ASFC"
"_ASCF"
"_AFSC"
"_AFCS"
"_ACSF"
"_ACFS"
"CSF_A"
"CSFA_"
"CS_FA"
"CS_AF"
"CSAF_"
"CSA_F"
"CFS_A"
"CFSA_"
"CF_SA"
"CF_AS"
"CFAS_"
"CFA_S"
"C_SFA"
"C_SAF"
"C_FSA"
"C_FAS"
"C_ASF"
"C_AFS"
"CASF_"
"CAS_F"
"CAFS_"
"CAF_S"
"CA_SF"
"CA_FS"
"ASF_C"
"ASFC_"
"AS_FC"
"AS_CF"
"ASCF_"
"ASC_F"
"AFS_C"
"AFSC_"
"AF_SC"
"AF_CS"
"AFCS_"
"AFC_S"
"A_SFC"
"A_SCF"
"A_FSC"
"A_FCS"
"A_CSF"
"A_CFS"
"ACSF_"
"ACS_F"
"ACFS_"
"ACF_S"
"AC_SF"
"AC_FS"
*/
