range			description									example
21				line 21											:21s/old/new/g
1					first line									:1s/old/new/g
$					last line										:$s/cool/beans/g
.					current line								:.s/cool/beans/g
%					all lines										:%s/cool/beans/g
21,25     lines 21 to 25 incl.				:21,25s/cool/beans/g
21,$			line 21 to end							:21,$s/cool/beans/g
.,$				current line to end					:.,$s/cool/beans/g
.+1,$     line after current to end		:.+1,$s/old/new/g
.,.+10    current to curret +10 inc		:.,.+10s/old/new/g
.,.10    current to curret +10 inc		:.,.10s/old/new/g

