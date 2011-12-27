/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement a routine that prints all the permutations of a given string.
 * Do *not* use recursion.
 */

/*____________________________________________________________________________*/


/**
 * @function {public static} swap
 *
 * Swaps the two characters of a given string.
 *
 * @param {String} str - the `String` to swap.
 * @param {Integer} i - the first character index.
 * @param {Integer} j - the second character index.
 *
 * @return the swapped `String`.
 */
function swap(str, i, j) {
    var ar = str.split('');
    var temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
    return ar.join('');
}

/**
 * A helper.
 */
function print(str) {
    console.log(str);
}

/**
 * @function {public static} permute
 *
 * Iteratively permutes the `String` using
 * the "CountDown QuickPerm Algorithm".
 * ref: http://permute.tchs.info/01example.php
 *
 * @param {String} str - the `String` to permute.
 */
function permute(str) {
    var len = str.length;
    var p = [];

    for(var i=0; i<len+1; i++) {
        p[i] = i;
    }

    var i = 1;
    var j = 0;

    print(str);

    while (i < len) {
        p[i] -= 1;

        j = (i%2 === 0) ? 0 : p[i];

        str = swap(str, j, i);

        print(str);

        i = 1;

        while (p[i] === 0) {
            p[i] = i;
            i++;
        }
    }
}

/*____________________________________________________________________________*/

permute('SF_CA');

/*
Output: ($ /usr/bin/node 007.js)
SF_CA
FS_CA
_SFCA
S_FCA
F_SCA
_FSCA
_FCSA
F_CSA
C_FSA
_CFSA
FC_SA
CF_SA
CS_FA
SC_FA
_CSFA
C_SFA
S_CFA
_SCFA
FSC_A
SFC_A
CFS_A
FCS_A
SCF_A
CSF_A
ASF_C
SAF_C
FAS_C
AFS_C
SFA_C
FSA_C
FS_AC
SF_AC
_FSAC
F_SAC
S_FAC
_SFAC
_AFSC
A_FSC
F_ASC
_FASC
AF_SC
FA_SC
SA_FC
AS_FC
_SAFC
S_AFC
A_SFC
_ASFC
CASF_
ACSF_
SCAF_
CSAF_
ASCF_
SACF_
SAFC_
ASFC_
FSAC_
SFAC_
AFSC_
FASC_
FCSA_
CFSA_
SFCA_
FSCA_
CSFA_
SCFA_
ACFS_
CAFS_
FACS_
AFCS_
CFAS_
FCAS_
_CASF
C_ASF
A_CSF
_ACSF
CA_SF
AC_SF
ACS_F
CAS_F
SAC_F
ASC_F
CSA_F
SCA_F
S_ACF
_SACF
AS_CF
SA_CF
_ASCF
A_SCF
C_SAF
_CSAF
SC_AF
CS_AF
_SCAF
S_CAF
F_CAS
_FCAS
CF_AS
FC_AS
_CFAS
C_FAS
C_AFS
_CAFS
AC_FS
CA_FS
_ACFS
A_CFS
AFC_S
FAC_S
CAF_S
ACF_S
FCA_S
CFA_S
_FACS
F_ACS
A_FCS
_AFCS
FA_CS
AF_CS
*/
