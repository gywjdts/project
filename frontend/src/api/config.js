
// 배포버전의 fastapi 주소 또는 로컬 fastapi 주소를 받아오는 함수

const getAPIBaseURL = () => {
    // Endpoint 직전 주소 (Base URL)

    // render 배포할 때 환경 변수에 접근하면 HOST 이름만 리턴을 한다
    const fastApiHost = import.meta.env.VITE_FASTAPI_HOST;

    if (fastApiHost.startWith('http')){
        // 로컬환경
        return fastApiHost;
    }

    // render의 web service의 도메인은
    // http://{host name}.onrender.com
    // ex) https://fastapi-dddd.onrender.com
    // 이것이 리턴되면 App.jsx에서 배포된 fastapi 서버로 요청할 수 있음
    return `http://${fastApiHost}`.onrender.com;
}

export const API_BASE_URL = getAPIBaseURL();