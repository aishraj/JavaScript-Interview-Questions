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

permute('SF CA');

/*
Output: ($ /usr/bin/node 006.js)
SF CA
FS CA
 SFCA
S FCA
F SCA
 FSCA
 FCSA
F CSA
C FSA
 CFSA
FC SA
CF SA
CS FA
SC FA
 CSFA
C SFA
S CFA
 SCFA
FSC A
SFC A
CFS A
FCS A
SCF A
CSF A
ASF C
SAF C
FAS C
AFS C
SFA C
FSA C
FS AC
SF AC
 FSAC
F SAC
S FAC
 SFAC
 AFSC
A FSC
F ASC
 FASC
AF SC
FA SC
SA FC
AS FC
 SAFC
S AFC
A SFC
 ASFC
CASF
ACSF
SCAF
CSAF
ASCF
SACF
SAFC
ASFC
FSAC
SFAC
AFSC
FASC
FCSA
CFSA
SFCA
FSCA
CSFA
SCFA
ACFS
CAFS
FACS
AFCS
CFAS
FCAS
 CASF
C ASF
A CSF
 ACSF
CA SF
AC SF
ACS F
CAS F
SAC F
ASC F
CSA F
SCA F
S ACF
 SACF
AS CF
SA CF
 ASCF
A SCF
C SAF
 CSAF
SC AF
CS AF
 SCAF
S CAF
F CAS
 FCAS
CF AS
FC AS
 CFAS
C FAS
C AFS
 CAFS
AC FS
CA FS
 ACFS
A CFS
AFC S
FAC S
CAF S
ACF S
FCA S
CFA S
 FACS
F ACS
A FCS
 AFCS
FA CS
AF CS
*/
