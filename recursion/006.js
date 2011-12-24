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

permute('SF CA');

/*
Output: ($ /usr/bin/node 006.js)
"SF CA"
"SF AC"
"SFC A"
"SFCA "
"SFA C"
"SFAC "
"S FCA"
"S FAC"
"S CFA"
"S CAF"
"S AFC"
"S ACF"
"SCF A"
"SCFA "
"SC FA"
"SC AF"
"SCAF "
"SCA F"
"SAF C"
"SAFC "
"SA FC"
"SA CF"
"SACF "
"SAC F"
"FS CA"
"FS AC"
"FSC A"
"FSCA "
"FSA C"
"FSAC "
"F SCA"
"F SAC"
"F CSA"
"F CAS"
"F ASC"
"F ACS"
"FCS A"
"FCSA "
"FC SA"
"FC AS"
"FCAS "
"FCA S"
"FAS C"
"FASC "
"FA SC"
"FA CS"
"FACS "
"FAC S"
" SFCA"
" SFAC"
" SCFA"
" SCAF"
" SAFC"
" SACF"
" FSCA"
" FSAC"
" FCSA"
" FCAS"
" FASC"
" FACS"
" CSFA"
" CSAF"
" CFSA"
" CFAS"
" CASF"
" CAFS"
" ASFC"
" ASCF"
" AFSC"
" AFCS"
" ACSF"
" ACFS"
"CSF A"
"CSFA "
"CS FA"
"CS AF"
"CSAF "
"CSA F"
"CFS A"
"CFSA "
"CF SA"
"CF AS"
"CFAS "
"CFA S"
"C SFA"
"C SAF"
"C FSA"
"C FAS"
"C ASF"
"C AFS"
"CASF "
"CAS F"
"CAFS "
"CAF S"
"CA SF"
"CA FS"
"ASF C"
"ASFC "
"AS FC"
"AS CF"
"ASCF "
"ASC F"
"AFS C"
"AFSC "
"AF SC"
"AF CS"
"AFCS "
"AFC S"
"A SFC"
"A SCF"
"A FSC"
"A FCS"
"A CSF"
"A CFS"
"ACSF "
"ACS F"
"ACFS "
"ACF S"
"AC SF"
"AC FS"
*/
