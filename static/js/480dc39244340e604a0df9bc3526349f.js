(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('延川县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610622","properties":{"name":"延川县","cp":[110.193514,36.878117],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@AA@@@@AAA@A@@AAB@A@@@@@BA@@AA@@@@@A@A@@@@@@A@@AB@@@@@@A@ACACECAA@@@A@A@AA@@AAACC@@CB@BA@@B@D@BCB@BAB@B@B@@CD@@@@@@B@@B@@@@B@@B@@@B@@@@B@AB@@@@@@@@@B@@@@B@@@@BCAC@@@A@A@A@A@AB@@AD@@A@@@C@A@@A@@A@AB@@@@AA@@AAB@@A@@@@@@@AA@@@A@C@@@A@A@@BA@@AA@@B@@AB@B@@A@@@A@A@@@@B@@A@A@@@@@A@@@A@@@CA@@A@A@A@A@A@A@C@A@A@C@AA@@A@A@ABAA@@A@A@@A@@@@A@@@@@AA@A@@AAA@@AAA@@AAAA@@AA@@AA@@AAA@@@@AA@@@@@@@@@@AA@@@@@@A@@A@@@A@@@A@@AA@@@A@@@AAA@@@@@A@@A@@AA@@@@@@A@@@A@ABCDABA@@AA@A@@@A@EA@@ACAA@@AA@AAC@A@A@@@@@AA@@A@@A@@@A@@@@A@@A@A@@@A@@BA@@@@BAA@B@@AB@@A@@@@@@@A@@@@B@@@B@@@B@B@@@@@B@@@BAB@@@B@@@B@@@B@@@B@@@B@@@B@@@@@B@@@BA@@@@BA@ABA@CBA@@@@@AAAAAA@A@@A@@@A@@B@BAB@@@@@@@@AC@@@AA@AA@AA@@AA@@A@@AB@@@@@BBB@@@@BD@BBB@@AB@@AB@B@@A@@@@BAB@@A@@@CC@C@AA@@B@@A@@BA@@@@@@@A@@B@@A@@B@@@@@BA@@@@@BB@B@@@B@@@@@B@@@B@B@@@@@BA@@@A@@BA@AB@BA@@B@@@@@BA@AB@BA@@BAB@@@B@BA@ADA@A@@@A@@@AB@@ABA@AB@BA@A@@@A@A@@@@BA@@@@BA@@B@B@@@@@@@BAB@@@B@B@@A@@@@BA@BBA@AB@BA@@BCB@@B@@@@@@@AB@@A@@@@@A@@BA@@@CB@@A@A@A@@B@@@@A@@@AB@@@@AB@BAB@B@@AB@@@@A@@@B@@BA@@@B@@BA@@@@BB@A@@B@@@B@@@B@B@B@B@B@@@BAB@@@@@B@@@B@@BD@@@B@@B@ABB@@@AB@@@B@@A@@@@@@B@B@@@@@B@@B@A@@B@@@@@B@B@@@B@BAD@@@@BB@@@@ABA@CBCBAA@@@A@@A@A@@@AB@B@B@@A@A@C@@A@@BC@@@@@@BA@@@AAB@@A@@@A@EAA@@@@BA@@@@@C@CAA@@A@@AA@A@@@A@@A@@@A@@@@AA@@AA@A@A@@BB@@@@BA@@@AA@@CB@A@@@@@ABADA@@@@@AA@@A@A@@AAA@@@A@A@AA@@BAA@A@@@@@AB@@@@A@@@@@AA@@@@@@A@@BAB@@@@ABAAABA@@@A@A@@@A@@@BA@A@A@@@@@A@@@@CBA@CBABC@A@@BA@@BAB@@@@A@A@CA@@B@@A@@C@@@@A@@BA@@AA@AA@@@A@@B@B@@@BA@@@AB@@AA@@@AA@@@A@@@@@AC@@@@C@A@@B@@@B@@@@ABAA@@A@@AA@@B@@@B@@@@B@@B@@@@@@A@A@@@BB@@A@@BA@CBCB@@@@AAA@@@@@AF@BAB@@@AAA@CA@AAA@CA@@@@AB@B@B@B@B@@A@B@@BAB@@CBABA@EACB@@@AAA@@A@@@@@A@C@C@A@ABCBA@@@A@@@A@@@@@@AAA@@ABAB@B@@@B@@B@ABBB@B@BABAB@@ACA@@AC@@@@B@@BB@D@BBBB@@@D@BAB@@@@B@@@BBB@@A@@@@@A@@@AA@@@B@@@B@B@D@@@@A@A@@@AA@A@A@@DA@A@@@@A@G@@B@@@B@@@BA@@AA@@@@B@@@BB@@BA@@BA@A@@A@@BA@A@@A@@A@@@AA@AB@@@BD@@@AB@@A@AAA@@@@B@@@B@@@@A@@@@@BB@B@@@BA@@@@@E@ABA@@BABADA@@BA@@@@A@@@@@A@@@BAB@B@@@@AB@@A@AAAAA@A@A@@@@@AA@@AAAA@@B@@@@@@A@@@A@A@@A@C@@@@@@AA@A@A@@@A@@B@@A@A@C@@@@@A@@@ABA@A@@@@B@@@BB@BB@@@@@@A@C@AAA@AB@@@@FBB@@@@@@BA@CBA@ABAB@BA@AB@@AB@@A@@@@@@B@@@@@BA@@B@@@BA@@BA@@B@BADA@@@ACA@AAA@@BA@A@A@A@AAABEDADA@CBC@A@@BABAB@B@BA@A@@@A@@@AAA@@@@@A@@@@@AA@A@A@@@@@A@@AAC@AA@@AA@@@@AAA@@A@@A@@@C@@AA@@@@ABA@C@@@AA@@@AB@BA@@A@@@@AB@@@A@@@A@ABAB@BABA@@@@@@A@A@@@@@@@DC@@@@AA@@AB@@@BAAC@A@A@A@@BA@@@@@@A@@@AB@@@BA@@@@@AA@@@AB@@ACCC@@@@A@AB@@CB@@A@@B@A@@CA@@A@@BA@@@@@@ABA@A@@@A@@@@A@@@@B@@@@A@@@@B@@@@A@A@AA@AA@@@AB@@ABAB@@A@@@@ABCAA@@A@AB@BA@CD@@@@AAA@@@C@@B@AA@@@AAA@A@@@@A@@A@@AA@@@A@A@A@@@A@AA@AA@CBA@@@A@AAA@A@@@@@@B@BBD@@@BA@BB@@AB@B@@AB@@@@@@A@@B@@A@@B@@BB@B@@A@@@@BA@A@@B@@@BA@@@@@@@@BB@@@@@@B@@@@@@B@AB@@@B@B@@BBA@@@@@AAA@@@@@A@@B@@D@@B@@C@@B@@@B@B@@B@@B@@@BA@@@A@BB@D@@@@C@ABA@@@A@A@@@@BABA@@BA@C@A@A@@@@BA@@@@@AA@@@@@@AB@A@@A@@AA@CB@@A@AB@@CB@@DB@@@@@B@@@@@@AB@@@AA@@@@@@@@BABB@@@BB@@@@@@A@A@@@A@@@@@BB@@BB@@AB@@@@B@@@@B@BA@@@@BB@@@@BA@@B@@@@@B@@@@AB@@@@@AA@@@A@@@BDA@BBBBAB@DA@@@@@AC@@@@A@@@BB@B@B@@@B@@AA@@AA@A@A@@A@@@@@A@@@AB@@@B@BA@CBADA@@BAA@@A@@@A@@B@BBB@@@BA@@@CA@@C@A@A@@@@@A@@BABABABA@@@@B@@A@@@A@A@A@@@@B@@AB@@AB@@@@@BA@@@AB@@@@AA@@@@AB@BA@A@@@@A@@@@A@@@@BADA@@B@B@@AB@@AAA@A@@@@@AB@BA@AA@@A@@BAB@DA@@@AB@BCAA@@@ABA@@B@@CBABAB@@@@A@@A@@@@AB@@A@AA@@A@BAA@@@@@@A@@@@A@@AB@@@@CA@@A@@A@A@@@CA@AA@@B@@@B@@BD@B@B@BA@@B@@A@AC@@@ACC@@A@@@@@A@AB@@C@ABGBEBCBABAB@@@@A@@AA@@AAAA@@@@BA@@@A@@@@B@B@@AB@@A@@@AA@@A@@B@@@B@BBB@@@@@BAAA@@B@@@@@@AA@@AA@@@A@@@A@@A@@@A@@BAB@@@@A@@@AAA@@@BA@@@@A@A@@BA@BB@@CF@@@@@B@D@BA@@@C@ABA@@@ABADA@A@@B@@ABC@AB@AA@@@@@@@A@@@@B@@@@@@A@@A@@@AA@@@@@ABA@AB@@AHABAB@@A@@@A@@@@@@DCD@BAB@@A@C@@@A@@@@@BB@D@@@D@B@@A@@@AAA@@@A@A@@B@@AB@BA@A@ABAB@@A@A@@@A@C@@BA@A@@@AB@@AD@@@BA@ABA@@BA@AB@@@@@B@@@B@@@BC@A@@@ABABA@ABAD@@BB@@@B@BA@@@@@@BA@BB@@@B@@@@A@A@A@@B@BA@@B@@@BA@@@A@@@A@AAA@AACA@AA@A@AA@@CAA@@@A@@AA@@@@@@@CAA@@@A@@BA@A@A@A@@@A@A@A@@@A@A@CBA@@@CB@@CBA@@@A@@@@CAA@@A@@@CBABA@@@@@A@A@AA@AA@@@A@A@A@A@A@CA@@@@AAB@@A@A@A@@@AAAA@AA@@@@CB@@@AA@@@@@A@A@ABCDABA@@BA@A@A@A@@BAD@BA@@@A@@@@@BCA@@@@AA@A@@@@@@BA@@B@@A@A@@@@@@@@AB@AA@@A@@@AB@@@B@B@BAB@D@B@B@B@@@B@@@@@@CAA@@B@@@@BB@@@@@B@@A@CC@@@@A@@@@@@BBBB@@@@B@@@@@@@B@@@@@@A@A@@@@@@B@@BB@B@@@B@@@B@@BB@@@@DB@@@@@BAB@B@B@@@B@@BBB@BB@@B@BDB@B@@@@D@@CBAD@@@BA@@@A@@B@@A@ABA@@B@@@@BB@@DB@AB@BAB@@AB@@@B@@B@@@BD@@@B@@BA@@BA@@@CAA@@@A@@B@@@@@B@@@B@@@@AB@AA@@@@B@@D@@@@@@@@B@B@@B@BB@@A@@B@@@BA@@AA@A@@BC@@@@@@BB@@@B@@AB@@@BBBB@@@BAFAB@BA@@B@B@@@@@BC@AB@D@BA@@@A@@@A@@@@@AB@@AA@@@CAC@A@BA@@@@BBBAB@@@B@BA@@BA@@@@B@@@BA@@BB@@B@BABCF@@AB@BB@ABAB@@@BBB@@@B@BAB@@@BCBADB@@@DB@@AB@BA@@@A@@AA@@AE@AB@@AB@@@B@BABADAB@B@@@@@B@@@BB@@B@@A@AB@@@BBB@@@B@B@B@BBB@@BDB@BB@@@B@@@@ABABA@AB@@A@A@@@@@@@C@A@@AA@@@@@A@@@@@A@@D@@ABA@@@@@@@@B@@@@@D@D@@@@@BA@@@C@A@@BA@@@A@@@ABCB@B@B@@@B@B@@@B@@@BB@BB@@BB@@@BBBB@BBD@@@B@B@@@@@BAB@@ABBDBB@D@B@@@@@B@BBF@B@B@@@@@DD@@B@B@@B@B@BB@@@BB@@BABBB@@@@BBB@BBB@@@@@@B@B@BAB@B@@BB@@@BDB@@@B@@@B@@@B@D@B@@@@A@A@@BAB@DAF@DA@@B@@BBB@BB@B@@@BABAB@@AB@BB@@BBB@B@B@B@@@DAB@B@DBB@@@B@B@BB@@B@DCB@B@@@@BB@@BB@@@@@BB@BBBD@@@@@B@@AB@BAB@B@D@@@DABBBB@@B@B@DA@@B@DB@@BB@B@BB@@@@@D@@@BA@@B@@@B@B@B@@@@@B@BBB@B@B@@@BB@BB@@BBB@DDB@@DB@B@@BD@B@B@@AD@B@B@@BB@@@@D@@@B@BA@@@@BA@AB@@@B@DBB@@A@@BA@@BABA@@B@@@BA@@@AB@B@@@BB@@B@@@@ABA@AB@BA@@B@B@B@@@BC@@@@BAB@@@B@@AB@@@B@@@@A@@@AB@@@BBB@@ABA@@@@DADBBAB@@@B@@@B@@@@BB@@@DDBB@@B@@BBAB@B@@@DBB@@@B@@@B@@AB@BC@@B@@AB@BC@@BADBBA@@LE@ADA@@@A@AB@@@BA@@DBBA@@DCB@@@@@BCB@FCB@B@B@DBB@BBB@B@B@FD@@BB@B@@AD@@@@@B@@BB@BB@@@AD@@ADAB@@@@@D@@@B@BBB@@@B@B@BB@@D@B@D@B@B@B@B@@@@@B@@@B@@B@A@@B@@ABA@A@@BA@A@AB@@@B@@@@B@B@B@@BB@@@DBB@@@@@B@B@@@B@@B@@@B@B@@@@@@B@D@BA@AB@@A@@@A@@BAB@BA@@BAB@B@@@BBB@B@@@@@@@B@@AB@@@B@@@BB@@BB@@BA@@BABAB@BA@@B@@@BBB@@@B@BB@@B@DBB@B@BAB@@A@AAAAC@A@@@AB@B@@@B@DB@@BAB@@BB@BB@@B@@@@ABA@AAC@@@A@@@@B@@A@@@C@@@A@A@A@@B@@@BC@@BABA@@DA@@@AAA@A@@BCBAB@DABB@@@B@@@B@@@@B@DA@BBB@@@@B@@ABAB@@@B@B@@BB@DF@F@BBB@B@@B@@B@@@@AB@D@@AB@@@BB@DBB@BA@@D@@AB@@@B@@BB@@@@@@@BD@@BB@F@B@@BB@BBBAB@@B@B@BBB@@@D@@@B@BA@@@@@AB@BBB@@B@@B@BBD@D@@@BA@@BAD@B@@@BAB@@@D@@BB@B@@@BBB@BAB@B@B@@@B@@AFAB@@BB@@B@B@BBB@B@B@@B@@@B@@@DA@@B@B@BB@B@B@B@@BB@@DADC@@B@@@BB@B@@@B@@B@B@@BB@@BBB@@BABAB@@@@@@@B@B@@@@@@BBB@B@@@@B@B@B@@@BB@B@@BBBBBBBB@B@B@BDDBB@@@B@BABCB@@AD@@@B@B@@@D@B@B@BAD@@@@@@B@@BBB@@@@BB@B@B@@@@B@DA@@B@B@B@@@B@B@@AB@@@@ABAB@D@B@@@@B@B@@B@BA@@B@@B@A@C@@@AB@@ABA@@@AAA@A@A@@@A@@B@D@@@@AB@@C@@@A@CDA@@@AAA@@@@@@DA@@@@@@@A@A@@BAB@@AB@@@B@@@B@@A@@@AAC@@BA@ABABA@@B@B@@AB@FABB@@B@@A@@AC@@C@@@@A@A@@BCBA@@@ABC@ABC@ABA@AAA@@@@A@@@@B@@@@A@@@A@A@@@AA@AAAAAAA@A@A@A@A@@@@@C@@@E@@@@BAB@@ABA@ABA@A@@B@DBB@BA@@@@AA@@@@@ABC@@@A@@@@@AD@@@BB@@B@B@B@@@B@@DB@@B@B@@B@B@@@@AAA@@@@@@@@BAD@BB@@@@@B@@B@@@@A@ABEB@@@@@@BB@@@B@B@B@@@@@@A@@@@@A@@@AB@FC@@@A@@CA@A@A@@BC@ABA@@BAD@D@B@@@@A@@@ABA@@@@D@@@@@@@@@@B@@@B@@D@B@@@B@@@@A@@BAB@B@@@B@@@@@@A@AB@B@@@BABAB@@@BA@A@A@@@@BA@@@@@@@A@ABA@AB@BA@ABA@A@@@A@@AA@@AAA@A@A@@AA@@@BA@@@@B@D@@@DBD@@@@@@A@@@@@A@@AB@@@@A@@@@@BA@@BAB@B@B@BB@@D@@@@@@CB@@@@@BB@@@@@@B@@A@@@@@@B@@@BB@@@@@@B@@@@@@@B@@BB@@A@@B@B@B@BA@@@AAA@@@@BAB@@@@@A@@A@AB@@@@@B@@@B@@@@@@@AC@@B@@@BB@@@@B@@@AA@@BAB@BABC@@B@B@@AB@BADA@ABAB@@@B@@@DDB@B@BB@@BB@@@@B@@@B@@BAB@B@@@@AB@@B@@@DA@@@@B@@BA@@@@B@@@@@B@@@@B@@@@@B@@A@ABAB@@@@@BDB@@@B@@A@@BA@@@B@@@@@BB@@B@@@B@@@@BB@@B@@@@@BA@A@A@@CAAA@AA@@@@A@@B@@@@BB@@@B@@A@@B@B@@@B@@@@@@B@@@@@BB@@@@@@@AB@@@@@B@@@@B@B@@@@@B@D@BB@@@@ABAAAB@@@@@@DB@@@@@B@B@@BAB@@@@BB@AB@@@@AB@@B@@@B@BA@@@@B@@@@B@@BBB@@@AA@@B@@@BB@@@BBB@B@@B@@@@@BA@@@B@@@@@B@@@@B@@@@@AB@@@@BB@A@A@@B@@@BBB@B@DBDB@@D@DBB@B@@@BBA@BB@@@BBA@@@@BB@@B@@@@@@B@@A@@@@B@@@@@B@@@B@@B@@@@@B@@@B@B@BB@@@@A@@@@B@B@@@@B@B@@@@@BB@BA@@@AB@@@BB@@@B@B@@@@@BABAB@@@@@@B@@@B@B@@B@@@F@BAB@@@B@@A@@@@@@BBBD@B@BBB@@FDB@@BB@@@@@@B@@AA@@@B@@@@@@@B@@A@@@@@DBB@@A@@BABA@@B@B@@@@@@@AD@@@@@BB@@@@@B@@@B@@@B@@@@A@@@A@@@A@@B@@@B@B@BB@@@@@AB@@@D@B@B@@@BBB@B@DAB@@@@A@@@AB@@BB@@@B@@A@@@@@AB@@@@D@@@@B@@@@@@@@B@@B@B@DAB@@@@A@@@@@A@@@@BABA@A@@@AB@@A@@@@@AA@@@DAB@@@@AB@@@B@@@F@@@@@BA@A@A@@BABAA@@A@@@@AA@@@@@A@@F@B@FB@@B@@@A@@@A@A@@@@@@@@B@@B@D@BB@@@@@@B@BAB@BA@@@@@C@@@@@@@@BB@@@B@@@@B@@@@@BA@A@@BBBA@@B@@@@@@@@BAB@@@@@@F@@@BA@@B@B@B@DBB@B@@@@@BA@@@@B@@@B@@@@@B@@A@@@@AAA@@@@A@@B@B@B@DA@@BA@@@AB@@A@@B@@@@@A@A@@A@@@A@@@A@@@@BB@B@@@@BA@A@@AEA@@@@@@@ABA@@A@@@A@A@A@@ABABC@@@@@@AB@DA@@@A@@@@@@A@@@@@BAA@@@@@@@AB@@@BA@E@C@@@C@@@@A@@@ABA@@A@@@A@@@@@@@@CB@D@@@BAA@B@BC@@@@B@@B@@B@@A@@A@@@A@@AD@@@@A@@A@A@C@@@A@@AAA@C@@@@B@@@@@BAB@B@B@DB@A@@BABAB@BDB@B@D@DBBBBBD@@BD@B@@@@A@@@AAA@A@@DB@@@A@@A@AAAA@A@A@AB@@@FA@@BA@@@B@D@B@@@DBB@@B@D@B@BB@@B@B@@@AB@B@@BB@@BB@@B@BB@@@@@@@A@@@AB@@@B@@@@@@B@BAB@B@@@B@@BB@@@BBB@@D@@B@@A@@@ABA@@@A@@B@@@@BBBBB@FDBBA@@@@BAB@@@@B@@@@@BA@AB@@@@@H@B@D@@@BABAB@B@@B@@AB@@D@D@@BB@@@DBB@FBBBB@B@B@@@B@@@@A@@AAAA@AAACC@@@A@@BABADADAB@@@ACAA@@@@@ADB@@@@@B@@B@BB@@@A@ABA@@B@BBB@B@B@B@@@DADA@@FA@A@AB@@AAA@AAAAA@A@A@CA@@C@@@A@@BBB@@@@@D@@A@ABA@A@@B@@@@@B@@@BBB@@@@@@A@@AAA@AAA@@AAA@A@A@AB@@A@@@A@AB@@BB@@BB@@@@@BA@@B@@@@@BBBF@B@@AB@@@AA@@A@B@@@B@@@BA@BB@B@@@@BA@@@@BB@@@@BA@@@B@B@@@B@@C@AB@@@@@@@@@BBA@@B@D@@BBB@BBBDBBD@@B@@A@@D@@@@@@A@@A@@@@@@@BA@@@A@@A@@A@@@@@@B@@A@@@@BBB@BD@@@@D@BAB@D@@@@A@@BBDBBBBB@@BA@@@AB@@@@@B@@B@@AB@BB@@@@@BA@C@@@@B@@@@B@B@@@@BBBBBBB@@BBB@BA@@BB@@@BABBB@@@@@@@@A@@@@B@@@B@@@@@@@@@@AB@@B@@B@B@@A@@B@@B@@@@@B@@@B@@@@BA@@@@B@@@@@@@@B@@B@B@A@@@@@A@@@BB@@@@@@B@@@@@@B@@@@@@BA@@@@B@@@AB@@@@@@@BB@@A@@@B@@B@@@@@@@@@@@@@DB@AFIDGBE@EAMCIIM@@CICOCSAKAIBK@@AEAIEEGEEAKAM@C@C@E@ECCE@CBCDCDAHCHAL@P@NALELEHEBG@GASCGCEGEEAGACA@C@ABCBAFAHAH@DADC@A@@@C@GCKCOEMGMCGEICAECC@C@KDEBE@EAAA@@AABEBE@@BAFALAP@J@NANCHEHEDEDIAGCCEEECCCIECE@C@CBCFAFAD@@@FBDDDBDHDFFFFDHBF@FADCBC@EAECE@@GGKKEE@@CGAGBIBIDG@GAEACEAEAEBGBEFEHEHEFEDE@E@E@GCEC@@CG@GBGDGJGPITGLEHGHIDIBA"],"encodeOffsets":[[113084,37527]]}}],"UTF8Encoding":true});}));