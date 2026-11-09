#!/bin/sh
#copyright 2026 Theron Kauk and John Morris Beck - hd.configure.direct@gmail.com - all rights reserved
markdown_like_page_language(){ awk '

function print_no_newline(x){printf "%s", x}

#todo
#sanitize inputs into markdown-like language
#risklevel severe

#todo change + to some kind of concatenation function in the generated javascript
#risk level low

#detect if we are interpreting markdown_like_page_language or javascript
$0=="markdown_like_page_language"{
getline line_of_code
print_no_newline( "console.log(" line_of_code "(")
getline line_of_code
print_no_newline("\"" line_of_code "\"" ",")
getline line_of_code
print_no_newline("\"" line_of_code "\"" ",")
getline line_of_code
print_no_newline("\"" line_of_code "\"" ",")
interpreting_markdown_like_page_language=1}

#if we are not interpreting markdown_like_page_language print $0
!interpreting_markdown_like_page_language;

#if we are interpreting markdown_like_page_language
interpreting_markdown_like_page_language{


#determine if we are finished interpreting markdown_like_page_language
while(interpreting_markdown_like_page_language){

#gemini I never hit this condition
getline line_of_markdown_language;
fields = split(line_of_markdown_language, arguments_of_line, " ");
if(line_of_markdown_language=="markdown_like_page_language"){
interpreting_markdown_like_page_language=0;
print_no_newline("\"\"));");
}

#if we are not inished interpreting markdown_like_langauge
else if(arguments_of_line[1]=="image"){

print_no_newline( "image(" "\"" arguments_of_line[2] "\"" ")" "+")

}

else if(arguments_of_line[1]=="button"){
textline="";
for(iterator=3;iterator<=fields;iterator++){
textline=textline arguments_of_line[iterator] " ";
}
print_no_newline( "button(" "\"" arguments_of_line[2] "\"" "," "\"" textline "\"" ")" "+")

}

else if(arguments_of_line[1]=="text"){
textline="";
for(iterator=2;iterator<=fields;iterator++){
textline=textline arguments_of_line[iterator] " ";
}
print_no_newline("text_element(" "\"" textline "\"" ")" "+");

}

else if(arguments_of_line[1]=="subheader"){
textline="";
for(iterator=2;iterator<=fields;iterator++){
textline=textline arguments_of_line[iterator] " ";
}
print_no_newline("subheader(" "\"" textline "\"" ")" "+");

}

else{

print_no_newline("\"" line_of_markdown_language "\"" "+")

}

}

}




';};


generate_page(){


    #create the javascript file that generates the new page
    pagefile="$1"
    cat "/home/user/projects/flightdeckexperiences/generate_page.js" "$pagefile" | markdown_like_page_language > "/tmp/generate_page$$" ;node "/tmp/generate_page$$";rm "/tmp/generate_page$$";

};
generate_page "$@";
