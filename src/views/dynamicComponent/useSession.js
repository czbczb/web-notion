import { reactive, readonly, computed, ref } from "vue";

// 从localStorage中获取sessions，假设其格式为JSON字符串
const getSessionsFromStorage = () => {
  const sessionsStr = localStorage.getItem("sessions");
  return sessionsStr ? JSON.parse(sessionsStr) : [];
};

// 将sessions存储到localStorage
const saveSessionsToStorage = (sessions) => {
  localStorage.setItem("sessions", JSON.stringify(sessions));
};

// useSession hook
const useSession = () => {
  // 使用reactive来创建一个响应式的sessions数组
  const sessions = reactive(getSessionsFromStorage());

  // 当前的 sessionId
  const currentSessionId = computed({
    get: () => localStorage.getItem("currentSessionId"),
    set: (id) => {
      localStorage.setItem("currentSessionId", id);
    },
  });
  // 当前的 visibleHistory
  const visibleHistory = reactive({
    visible: JSON.parse(localStorage.getItem("visibleHistory"))
  }
  );

  const toggleHistory = () => {
    console.log(visibleHistory.value)
    if(visibleHistory.value === undefined || visibleHistory.value === false){
      visibleHistory.visible = true;
      localStorage.setItem("visibleHistory", true);
    }else {
      visibleHistory.visible = false;
      localStorage.setItem("visibleHistory", false);
    }
    
    console.log(visibleHistory.value,);
  };

  // 当前的 history
  const currentHistory = computed(() => {
    const session = sessions.find(
      (s) => s.id.toString() === currentSessionId.value
    );
    return session ? session.history : [];
  });

  // 删除会话
  const deleteSession = (id) => {
    sessions.splice(
      sessions.findIndex((s) => s.id === id),
      1
    );
    saveSessionsToStorage(sessions);
  };

  // 添加会话
  const addSession = (session) => {
    sessions.push(session);
    saveSessionsToStorage(sessions);
  };

  // 更新会话
  const updateSession = (id, updates) => {
    const index = sessions.findIndex((s) => s.id === id);
    if (index !== -1) {
      sessions[index] = { ...sessions[index], ...updates };
      saveSessionsToStorage(sessions);
    }
  };

  // 切换会话
  const switchSession = (id) => {
    currentSessionId.value = id;
    saveSessionsToStorage(sessions);
  };

  // 返回hook的公共接口
  return {
    sessions: readonly(sessions), // 提供只读版本的sessions
    currentSessionId,
    currentHistory,
    deleteSession,
    addSession,
    updateSession,
    switchSession,
    toggleHistory,
    visibleHistory,
  };
};

export default useSession;
