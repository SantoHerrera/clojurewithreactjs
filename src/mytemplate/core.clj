(ns mytemplate.core
  (:gen-class)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.util.response :refer [resource-response redirect]]))
(* 7 7)
(use 'ring.adapter.jetty)
(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

;(GET "/" [] (resource-response "index.html" {:root "public"}))
(defroutes app
  (GET "/" [] (redirect "index.html"))
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))


(def handler
  (handler/site app))

(comment
  (run-jetty handler {:port 5678})
  (.stop handler))
