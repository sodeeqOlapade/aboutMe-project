const techData = {
  java: {
    logo: '/images/java.jpeg',
    history: ` Java is a general-purpose programming language that is
        class-based, object-oriented[15] (although not a pure OO language,
        as it contains primitive types[16]), and designed to have as few
        implementation dependencies as possible. It is intended to let
        application developers write once, run anywhere (WORA),[17]
        meaning that compiled Java code can run on all platforms that
        support Java without the need for recompilation.[18] Java
        applications are typically compiled to bytecode that can run on
        any Java virtual machine (JVM) regardless of the underlying
        computer architecture. The syntax of Java is similar to C and C++,
        but it has fewer low-level facilities than either of them. As of
        2018, Java was one of the most popular programming languages in
        use according to GitHub,[19][20] particularly for client-server
        web applications, with a reported 9 million developers.[21].
        <br />
        Java was originally developed by James Gosling at Sun Microsystems
        (which has since been acquired by Oracle) and released in 1995 as
        a core component of Sun Microsystems' Java platform. The original
        and reference implementation Java compilers, virtual machines, and
        class libraries were originally released by Sun under proprietary
        licenses. As of May 2007, in compliance with the specifications of
        the Java Community Process, Sun had relicensed most of its Java
        technologies under the GNU General Public License. Meanwhile,
        others have developed alternative implementations of these Sun
        technologies, such as the GNU Compiler for Java (bytecode
        compiler), GNU Classpath (standard libraries), and IcedTea-Web
        (browser plugin for applets).`,
    writer: 'James Gosling'
  }
};

const fName = document.querySelector('#fName');
const cName = document.querySelector('#cName');
const email = document.querySelector('#email');
const phone = document.querySelector('#pNumber');
const subscribe = document.querySelector('#subscribe');

const blog = document.querySelector('.blog');
const languageLogo = document.querySelector('.language-logo');
const languageHistory = document.querySelector('.content');

const stacks = document.querySelectorAll('.language-name h4');
stacks.forEach(stack => {
  stack.addEventListener('click', trigger);
});


function trigger(event) {
  const currentTech = this.textContent.toLowerCase();
  console.log(currentTech)
  const currentTechData = techData[currentTech];
  console.log('currentTechData', currentTechData);
}

subscribe.addEventListener('submit', submit);

function submit(event) {
  //   event.preventDefault();
  console.log(event);
  console.log(fName.value);
  console.log(cName.value);
  console.log(email.value);
  console.log(phone.value);
}

const url = new URLSearchParams(window.location.search);

console.log(url.getAll('fName'));
