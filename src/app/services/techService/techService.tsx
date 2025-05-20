

export default function getTechLink( technology: string){
    switch(technology.toLowerCase()){
        case 'php':
            return 'https://www.php.net/';
        case 'mysql':
            return 'https://www.mysql.com/';
        case 'javascript':
            return 'https://www.javascript.com/';
        case 'html':
            return 'https://html.com/';
        case 'css':
            return 'https://css3.com/';
        case 'python':
            return 'https://www.python.org/';
        case 'flask':
            return 'https://flask.palletsprojects.com/';
        case 'json':
            return 'https://www.json.org/';
        case 'ajax':
            return 'https://www.javascript.com/';
        case 'kotlin':
            return 'https://kotlinlang.org/';
        case 'android studio':
            return 'https://developer.android.com/studio';
        case 'react native':
            return 'https://reactnative.dev/';
        case 'nextjs':
            return 'https://nextjs.org/';
        case 'typescript':
            return 'https://www.typescriptlang.org/';
        case 'expo':
            return 'https://expo.dev/'; 
        default:
            return '/';
    }
}